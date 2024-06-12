'use client';
import React from 'react'
import Image from 'next/image';


const page = () => {
    return (
        <div className='w-full my-32 sm:mt-48 px-8 sm:px-32 overflow-hidden'>
            <h1 className='text-4xl sm:text-6xl my-8 tracking-tighter'>Buffer Overflow Exploitation in FreeFloat FTP Server - <span className='text-blue-600'>Steflan Security</span></h1>
            <hr className='h-[12px]' />

            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Stack Buffer Overflow Theory</h2>
            <p className='my-4'>Stack buffer overflow is a memory corruption vulnerability that occurs when a program writes more data to a buffer located on the stack than what is actually allocated for that buffer, therefore overflowing to a memory address that is outside of the intended data structure.</p>
            <p className='my-4'>This will often cause the program to crash, and if certain conditions are met, it could allow an attacker to gain remote control of the machine with privileges as high as the user running the program, by redirecting the flow execution of the application to malicious code.</p>
            <p className='my-4'>Before diving into an actual attack, it is crucial to understand basic concepts of C programming such as memory, the stack, CPU registers, pointers and what happens behind the scenes, in order to take advantage of a memory corruption to compromise a system.</p>

            <div className="my-4 pt-16 mx-auto text-center">
                <h3 className='text-lg sm:text-xl'>Memory</h3>
                <Image src="/assets/security/buffer-overflow/stack-overview.webp" alt="Stack overview" className='mx-auto ' width={500} height={475} />
            </div>

            <p className='my-2'>Normally, a process is allocated a certain amount of memory which contains all of the necessary information it requires to run, such as the code itself and any DLLs, which isn’t shared with other processes.</p>
            <p className='my-2'>Whenever an executable is run, its code is loaded into memory so that it can perform all the tasks that is has been programmed to do, because all of the instructions are loaded onto the program’s memory, this can be changed thus making the application perform unintended actions.</p>
            <p className='my-2'>All variables in memory are stored using either little endian (for intel x86 processors) or big endian (for PowerPC) format.</p>
            <p className='my-2'>In little endian, the bytes are stored in reverse order. So for example:</p>
            <ul className='my-8 mx-auto sm:px-24'>
                <li><strong>0x032CFBE8</strong> will be stored as <strong>“E8FB2C03”</strong></li>
                <li><strong>0x7734BC0D</strong> will be stored as <strong>“0DBC3477”</strong></li>
                <li><strong>0x0BADF00D</strong> will be stored as <strong>“0DF0AD0B”</strong></li>
            </ul>


            <h2 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>The Stack</h2>
            <p>The stack is a section of memory that stores temporary data, that is executed when a function is called.</p>
            <p>The stack always grows downwards towards lower values as new information is added to it. The ESP CPU register points to the lowest part of the stack and anything below it is free memory that can be overwritten, which is why it is often exploited by injecting malicious code into it.</p>

            <h2 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>CPU Registers</h2>
            <p>Registers are CPU variables that store single records, there are a fixed number of registers that are used for different purposes and they all have a specific location in the CPU.</p>
            <p>Registers can hold pointers which point to memory addresses containing certain instructions for the program to perform, this can be exploited by using a jump instruction to move to a different memory location containing malicious code.</p>
            <p>Intel assembly has 8 general purpose and 2 special purpose 32-bit register. Different compilers may have different uses for the registers, the ones listed below are used in Microsoft’s compiler:</p>
            <ul className='my-8 mx-auto sm:px-24'>
                <li><strong>EAX</strong>: General Purpose - Stores the return value of a function.</li>
                <li><strong>EBX</strong>: General Purpose - No specific uses, often set to a commonly used value in a function to speed up calculations.</li>
                <li><strong>ECX</strong>: General Purpose - Occasionally used as a function parameter and often used as a loop counter.</li>
                <li><strong>EDX</strong>: General Purpose - Occasionally used as a function parameter, also used for storing short-term variables in a function.</li>
                <li><strong>ESI</strong>: General Purpose - Used as a pointer, points to the source of instructions that require a source and destination.</li>
                <li><strong>EDI</strong>: General Purpose - Often used as a pointer. Points to the destination of instructions that require a source and destination.</li>
                <li><strong>EBP</strong>: General Purpose - Has two uses depending on compile settings, it is either the frame pointer or a general purpose register for storing of data used in calculations.</li>
                <li><strong>ESP</strong>: General Purpose - A special register that stores a pointer to the top of the stack (virtually under the end of the stack).</li>
                <li><strong>EIP</strong>: Special purpose - Stores a pointer to the address of the instruction that the program is currently executing. After each instruction, a value equal to its size is added to EIP, meaning it points at the machine code for the next instruction.</li>
                <li><strong>FLAGS</strong>: Special purpose - Stores meta-information about the results of previous operations i.e. whether it overflowed the register or whether the operands were equal.</li>
            </ul>

            <h2 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>Pointers</h2>
            <p>A pointer is, a variable that stores a memory address as its value, which will correspond to a certain instruction the program will have to perform. The value of the memory address can be obtained by “dereferencing” the pointer.</p>
            <p>They are used in buffer overflow attacks to redirect the execution flow to malicious code through a pointer that points at a JMP instruction.</p>

            <h2 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>Common Instructions</h2>
            <p>This section covers some of the most common assembly instructions, their purpose in a program and some example uses:</p>
            <ul className='my-8 mx-auto sm:px-24'>
                <li><strong>Pointers and Dereferencing</strong>: Since registers simply store values, they may or may not be used as pointers, depending on the information stored. If being used as a pointer, registers can be dereferenced, retrieving the value stored at the address being pointed to. Example: Movq, movb.</li>
                <li><strong>Doing nothing</strong>: The NOP instruction, short for “no operation”, simply does nothing. Example: NOP.</li>
                <li><strong>Moving data around</strong>: Used to move values and pointers. Example: Mov, movsx, movzx, lea.</li>
                <li><strong>Math and logic</strong>: Used for math and logic. Some are simple arithmetic operations and some are complex calculations. Example: Add, sub, inc, dec, and.</li>
                <li><strong>Jumping around</strong>: Used mainly to perform jumps to certain memory locations, it stores the address to jump to. Example: Jmp, call, ret, cmp, test.</li>
                <li><strong>Manipulating the stack</strong>: Used for adding and removing data from the stack. Example: Push, pop, pushaw.</li>
            </ul>

            <h2 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>Stack Buffer Overflow Process</h2>
            <p>Although applications require a custom exploit to be crafted in order to gain remote access, most stack buffer overflow exploitation, at a high level, involve the following phases:</p>
            <p>The next section will cover these phases in great detail, from both a theoretical and practical standpoint.</p>
            <Image src="/assets/security/buffer-overflow/buffer-overflow-process.png" alt="Buffer overflow process" className='mx-auto mt-6' width={700} height={500} />
            <p className='my-1 text-xs mx-auto text-center font-normal text-blue-600'>All credits to steflan security.</p>


            <h2 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>Practical Example </h2>
            <p>This practical example will demonstrate how to exploit a stack buffer overflow vulnerability that affected FreeFloat FTP Server 1.0, an FTP server application. According to the exploit’s author, the crash occurs when sending the following information to the server:</p>
            <ul>
                <li>USER + [arbitrary username]</li>
                <li>PASS + [arbitrary password]</li>
                <li>REST (used to restart a file transfer from a specified point) + 300+ bytes</li>
            </ul>
            <p>The entire exploitation process will be conducted using Immunity Debugger, which is free.</p>

            <h2 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>Crashing the application</h2>
            <p>First of all, we have to cause the application to crash, in order to ascertain there is a buffer overflow vulnerability and this can be further exploited to gain remote access.</p>
            <p>Once the FreeFloat FTP Server executable has been downloaded, it can be run by double-clicking it:</p>
            <p>This will start the FTP server and open port 21 for incoming connections.</p>
            <p>Starting the Immunity Debugger, selecting the File → Attach option to attach it to the FreeFloat FTP process:</p>
            <Image src="/assets/security/buffer-overflow/starting.png" alt="Starting debugger" className='mx-auto my-6' width={500} height={475} />
            <p>Once the debugger has been attached to the process, it will enter a pause state. In order to start its execution, the Debug → Run option can be used:</p>
            <Image src="/assets/security/buffer-overflow/running.png" alt="Running debugger" className='mx-auto my-6' width={600} height={475} />
            <p>Immunity Debugger uses the following panes used to display information:</p>
            <ul className='my-8 mx-auto sm:px-24'>
                <li><strong>Top-Left Pane</strong> – It contains the instruction offset, the original application code, its assembly instruction and comments added by the debugger.</li>
                <li><strong>Bottom-Left Pane</strong> – It contains the hex dump of the application itself.</li>
                <li><strong>Top-Right Pane</strong> – It contains the CPU registers and their current value.</li>
                <li><strong>Bottom-Right Pane</strong> – It contains the stack and its current values.</li>
            </ul>
            <p className='mb-4'>Python can be used to generate a buffer of 300 A characters to test the crash. Establishing
                a TCP connecting with port 21 using Netcat, logging in with test/test and sending REST plus
                the buffer created using Python to cause the crash:</p>

            <Image src="/assets/security/buffer-overflow/sending-buffer.png" alt="Sending Buffer" className='mx-auto my-6' width={600} height={475} />
            <p className='my-4'>This has crashed the program and Immunity Debugger has reported an access violation error:</p>
            <Image src="/assets/security/buffer-overflow/examining-in-immunity.webp" alt="Examining Buffer in Immunity" className='mx-auto my-6' width={600} height={475} />
            <p className='my-4'>The EIP register was overwritten with the 300 x41 (which corresponds to A in ASCII) sent
                through Netcat:</p>
            <Image src="/assets/security/buffer-overflow/overwriting-eip.webp" alt="Overwriting EIP" className='mx-auto my-6' width={600} height={475} />
            <p className='my-4'>Since EIP stores the next instruction to be executed by the application and we established
                we can manipulate its value, this can be exploited by redirecting the flow of the program
                execution to ESP, which can be injected with malicious code.</p>
            <p className='my-4'>The fuzzing process can also automated through the use of a Python fuzzer, by sending
                incremental amounts of data in order to identify exactly at which point the application will
                crash and therefore stop responding. To connect to the application through Netcat, the following script can be used:
            </p>
            <Image src="/assets/security/buffer-overflow/fuzzing-script.jpeg" alt="Fuzzing script" className='mx-auto my-6' width={800} height={500} />


            <h3 className='text-lg sm:text-3xl tracking-tighter my-2 pt-12'>Finding the EIP offset </h3>
            <p className='my-4'>The next step required is to identify which part of the buffer that is being sent is landing in the EIP register, in order to then modify it to control the execution flow of the program. Because all that was sent was a bunch of As, at the moment there is no way to know what part has overwritten EIP.</p>
            <p className='my-4'>The Metasploit msf-pattern_create tool can be used to create a randomly generated string that will be replacing the A characters in order to identify which part lands in EIP. Creating a pattern of 300 characters using msf-pattern_create to keep the same buffer length:</p>
            <Image src="/assets/security/buffer-overflow/creating-pattern.png" alt="Creating msf pattern" className='mx-auto my-6' width={600} height={475} />
            <p className='my-4'>Adding the pattern to the buffer variable in the script, instead of sending the “A” characters:</p>
            <Image src="/assets/security/buffer-overflow/pattern-exploit.jpeg" alt="Sending pattern" className='mx-auto my-6' width={800} height={500} />
            <p className='my-4'>Restarting the application, re-attaching Immunity Debugger and running the script:</p>
            <Image src="/assets/security/buffer-overflow/running-script.png" alt="Running the script" className='mx-auto my-6' width={600} height={475} />
            <p className='my-4'>The randomly generated pattern was sent instead of the A characters.
                The application crashed with an access violation error as expected, but this time, the EIP
                register was overwritten with “41326941”.</p>
            <Image src="/assets/security/buffer-overflow/eip-41326941.webp" alt="EIP overwritten with 41326941" className='mx-auto my-6' width={600} height={475} />
            <p className='my-4'>The Metasploit msf-pattern_offset tool can then be used to find the EIP value in the pattern
                created earlier to calculate the exact EIP offset i.e. the exact location of EIP, which in this
                case is at byte 246.</p>
            <Image src="/assets/security/buffer-overflow/offset-match.png" alt="Matching offset" className='mx-auto my-6' width={500} height={475} />
            <p className="my-4">Modifying the script to override EIP with four “B” characters instead of the As in order to verify whether the last test was successful:</p>
            <Image src="/assets/security/buffer-overflow/adding-Bs.jpeg" alt="Adding BBBB" className='mx-auto my-6' width={800} height={500} />
            <p className='my-4'>Restarting the application, re-attaching Immunity Debugger and running the script:</p>
            <Image src="/assets/security/buffer-overflow/running-script2.png" alt="Running the script" className='mx-auto my-6' width={600} height={475} />
            <p className="my-4">As expected, the EIP registry was overwritten with the four “B” characters:</p>
            <Image src="/assets/security/buffer-overflow/eip-42424242.webp" alt="EIP overwritten with 42424242" className='mx-auto my-6' width={600} height={475} />
            <p className="my-4">Now that we have full control over EIP, it can be exploited to change redirect the application execution to certain instructions.</p>



            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Finding Available Shellcode Space</h2>
            <p className='my-4'>The purpose of this step is to find a suitable location in the memory for our shellcode to then redirect the program execution to it. </p>
            <p className='my-4'>When the last script was executed, the C characters that were used to keep the buffer size as 300 overflowed into ESP, so this could be a good place to insert the shellcode:</p>
            <Image src="/assets/security/buffer-overflow/esp-CCCC.webp" alt="ESP overwritten with CCCC" className='mx-auto my-6' width={600} height={475} />
            <p className='my-4'>We can tell the C characters sent to the application landed in ESP from the fifth one onward because ESP’s address is 0064FBE8, which corresponds to the second group of Cs.</p>
            <p className='my-4'>We now have to verify whether there is enough space for the shellcode inside ESP, which is what will be executed by the system by the program in order to gain remote access. A normal reverse shell payload is normally about 300-400 bytes, and because only 50 Cs were sent we cannot tell whether there is enough space for it in ESP.</p>
            <p className='my-4'>Modifying the script, adding about 550 C characters to the script in a new shellcode variable:</p>
            <code className='font-bold bg-gray-200 px-2'>shellcode = "C" * (800 - (len(offset) -len(EIP))) #Shellcode placeholder using about 550 Cs</code>
            <Image src="/assets/security/buffer-overflow/adding-550Cs.jpeg" alt="Modifying script" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">Restarting the application, re-attaching Immunity Debugger and running the script. All the “C” characters that were sent by the script have overwritten ESP:</p>
            <Image src="/assets/security/buffer-overflow/ESP-overwritten.webp" alt="Running the script" className='mx-auto my-6' width={800} height={600} />
            <p className="my-4">To calculate how many C characters made it into ESP, all we need to do is subtract the address where ESP starts to the one where the Cs end.</p>
            <h3 className='font-bold text-center mx-auto'>Beginning of ESP:</h3>
            <Image src="/assets/security/buffer-overflow/beginning-esp.webp" alt="Beginning of ESP" className='mx-auto my-6' width={600} height={475} />
            <h3 className='font-bold text-center mx-auto'>End of Cs:</h3>
            <Image src="/assets/security/buffer-overflow/end-of-Cs.webp" alt="End of Cs" className='mx-auto my-6' width={600} height={475} />
            <p className="my-4">Calculating the difference between the two memory addresses using Python, all of the C
                characters made it into ESP which makes it a suitable shellcode location. </p>
            <Image src="/assets/security/buffer-overflow/calculating-difference.png" alt="Calculating difference" className='mx-auto my-6' width={600} height={475} />


            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>What if there is not enough space?</h2>
            <p className="my-4">If there is not enough space in the ESP register to insert our shellcode, this can be
                circumvented by using a first stage payload. Since we should be able to override at least the
                first few characters of ESP, this will be enough to instruct it to jump to a different register
                where the shellcode will be placed.</p>
            <p className="my-4">If a different register points to the beginner of the buffer, for example ECX:</p>
            <Image src="/assets/security/buffer-overflow/ECX-overwritten.webp" alt="ECX overwritten" className='mx-auto my-6' width={500} height={475} />
            <p className="my-4">Then the opcode used to perform a JMP ECX instruction can be generated:</p>
            <Image src="/assets/security/buffer-overflow/jmp-ecx.png" alt="JMP ECX" className='mx-auto my-6' width={500} height={475} />
            <p className="my-4">And added to the script, in order to instruct ESP to jump to ECX:</p>
            <pre>
                <code className='font-semibold bg-gray-200 px-2'>
                    offset = "A" * 246 #defining the offset value{'\n'}
                    EIP = "B" * 4 #EIP placeholder{'\n'}
                    first_stage = "\xff\xe1" #defining first stage payload as the JMP ECX instruction{'\n'}
                    shellcode = "C" * (800 - (len(offset) -len(EIP))) #Shellcode placeholder using about 550 Cs
                </code>
            </pre>
            <Image src="/assets/security/buffer-overflow/jmp-ecx-script.jpeg" alt="Adding JMP ECX" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">In this scenario, the shellcode is added to the beginning of the buffer, since the register where
                it is placed is the first one that our data is written to.</p>
            <p className="my-4">So basically this is what happens when the exploit is run:</p>
            <ol className='my-8 mx-auto sm:px-24 list-decimal'>
                <li>The shellcode is written to ECX.</li>
                <li>The buffer causes the application to crash.</li>
                <li>EIP is overwritten with a JMP ESP instruction which redirects the execution flow to ESP.</li>
                <li>ESP performs a JMP ECX instruction, redirecting the execution to ECX.</li>
                <li>The shellcode stored in ECX is then executed.</li>
            </ol>



            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Testing for Bad Characters</h2>
            <p className="my-4">Some programs will often consider certain characters as “bad”, and all that means is that if
                they come across one of them, this will cause a corruption of the rest of the data contained
                in the instruction sent to the application, not allowing the program to properly interpret the it.
                One character that is pretty much always considered bad is x00, as it is a null-byte and
                terminates the rest of the application code.
            </p>
            <p className="my-4">In this phase all we have to do is identify whether there are any bad characters, so that we
                can later on remove them from the shellcode. Modifying the script, adding all possible characters in hex format to a badchars variable and
                sending it instead of the shellcode placeholder:</p>
            <Image src="/assets/security/buffer-overflow/badchars-script.jpeg" alt="Adding badchars" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">Restarting the application, re-attaching Immunity Debugger and running the script:</p>
            <Image src="/assets/security/buffer-overflow/running-badchars.png" alt="Running badchars" className='mx-auto my-6' width={600} height={475} />
            <p className="my-4">Right-clicking on the ESP value and selecting “Follow in Dump” to follow ESP in the application
                dump and see if all the characters sent made it there:</p>
            <Image src="/assets/security/buffer-overflow/following-ESP.webp" alt="Following ESP" className='mx-auto my-6' width={600} height={475} />
            <p className="my-4">It looks like the characters stop displaying properly after x09, so this indicates that the next
                character (x0A) is a bad character</p>
            <Image src="/assets/security/buffer-overflow/badchars-found.webp" alt="Badchars found" className='mx-auto my-6' width={500} height={475} />
            <p className="my-4">After removing x0A from the badchars variable and following the same process again, this time the characters stopped after x0C , so x0D is also bad</p>
            <Image src="/assets/security/buffer-overflow/badchars-found2.webp" alt="Badchars found" className='mx-auto my-6' width={500} height={475} />
            <p className="my-4">This time, all of the characters made it into the ESP dump, starting from x01 all the way to xFF, so the only bad characters are x00, x0A and x0D.</p>
            <Image src="/assets/security/buffer-overflow/no-badchars-found.webp" alt="No Badchars found" className='mx-auto my-6' width={500} height={475} />


            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Finding a JMP ESP Return Address</h2>
            <p className="my-4">Now that we can control EIP and found a suitable location for our shellcode (ESP), we need
                to redirect the execution flow of the program to ESP, so that it will execute the shellcode. In
                order to do this, we need to find a valid JMP ESP instruction address, which would allow us
                to “jump” to ESP.
            </p>
            <p className="my-4">For the address to be valid, it must not be compiled with ASLR support and it cannot contain
                any of the bad characters found above, as the program needs to be able to interpret the
                address to perform the jump.
            </p>
            <p className="my-4">Restarting the application, re-attaching Immunity Debugger and using !mona modules
                command to find a valid DLL/module:</p>
            <Image src="/assets/security/buffer-overflow/finding-module.webp" alt="Finding module" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">Finding a valid opcode for the JMP ESP instruction – FFE4 is what we require:</p>
            <Image src="/assets/security/buffer-overflow/finding-jmp-esp.webp" alt="Finding JMP ESP" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">Using the Mona find command to with to find valid pointers for the JMP ESP instruction:</p>
            <Image src="/assets/security/buffer-overflow/finding-valid-pointer.png" alt="Finding JMP ESP" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">It looks like a valid pointer was found (0x77EFCE33), and it does not contains any of the bad
                characters.</p>
            <p className="my-4">Copying the address and searching for it in the application instructions using the “follow
                expression” Immunity feature to ensure it is valid. It looks like it does correspond to a valid JMP ESP instruction address:</p>
            <Image src="/assets/security/buffer-overflow/valid-jmp-esp.png" alt="Valid JMP ESP" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">Changing the script replacing the “B” characters used for the EIP register with the newly found
                JMP ESP instruction address.</p>
            <p className="my-4">The EIP return address has to be entered the other way around as explained in the memory
                section, since little endian stores bytes in memory in reverse order.</p>
            <Image src="/assets/security/buffer-overflow/adding-jmp-esp.jpeg" alt="Adding JMP ESP" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">Breakpoints are used to stop the application execution when a certain memory location is
                reached and they can be used to ensure the JMP ESP instruction is working correctly.</p>
            <p className="my-4">Restarting the application, re-attaching Immunity Debugger and adding a breakpoint on the
                JMP ESP instruction address by hitting F2, then starting the program execution.</p>
            <p className="my-4">A breakpoint can also be added by right-clicking the memory location in the top-left pane,
                and selecting the Breakpoint → Memory, on access option:</p>
            <Image src="/assets/security/buffer-overflow/adding-breakpoint.png" alt="Adding breakpoint" className='mx-auto my-6' width={600} height={500} />
            <p className="my-4">Executing the script again.</p>
            <p className="my-4">When the application reaches the JMP ESP instruction, which is where the breakpoint was
                added, the program execution stops as instructed. When single-stepping into the application execution using F7, this takes us to the C characters
                which are the placeholder for our shellcode.</p>
            <Image src="/assets/security/buffer-overflow/breakpoint-hit.png" alt="Breakpoint hit" className='mx-auto my-6' width={600} height={475} />



            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Generating and Adding Shellcode</h2>
            <p className="my-4">At this point we can completely control the execution flow of the program, so all that is left to do
                is add our shellcode to the exploit to trigger a reverse shell.</p>
            <p className="my-4">The shellcode can be generated using MSFvenom with the following flags:</p>
            <ul className='my-8 mx-auto sm:px-24 list-disc'>
                <li>-p to specify the payload type, in this case the Windows reverse TCP shell</li>
                <li>-(LHOST) to specify the local host IP address to connect to</li>
                <li>-(LPORT) to specify the local port to connect to</li>
                <li>-f to specify the format, in this case Python</li>
                <li>-b to specify the bad characters, in this case \x00, \x0A and \x0D</li>
                <li>-e to specify the encoder, in this case shikata_ga_nai</li>
                <li>-v to specify the name of the variable used for the shellcode, in this case simply “shellcode”</li>
            </ul>
            <Image src="/assets/security/buffer-overflow/generating-shellcode.png" alt="Generating shellcode" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">Because the shellcode is generated using an encoder (which purpose is basic antivirus evasion),
                the program first needs to decode the shellcode before it can be run. This process will corrupt
                the next few bytes of information contained in the shellcode, and therefore a few NOP Slides are
                required to give the decoder enough time to decode it before it is executed by the program.
            </p>
            <p className="my-4">NOP Slides (No Operation Instructions) have a value of 0x90 and are used to pass execution to
                the next instruction i.e. let CPU “slide” through them until the shellcode is reached.</p>
            <p className="my-4">Adding the shellcode to the script, along with 20 NOP slides at the beginning of it to avoid errors
                during the decoding phase:</p>
            <Image src="/assets/security/buffer-overflow/adding-shellcode.jpeg" alt="Adding shellcode" className='mx-auto my-6' width={800} height={500} />





            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Gaining Remote Access</h2>
            <p className="my-4">Once the final exploit has been assembled, the next step is to set up a Netcat listener, which will
                catch our reverse shell when it is executed, using the following flags:</p>
            <ul className='my-8 mx-auto sm:px-24 list-disc'>
                <li>-l to listen for incoming connections</li>
                <li>-v for verbose output</li>
                <li>-n to skip the DNS lookup</li>
                <li>-p to specify the port to listen on</li>
            </ul>
            <Image src="/assets/security/buffer-overflow/running-FTP-server.png" alt="Running FTP server" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">Running the final Python exploit:</p>
            <Image src="/assets/security/buffer-overflow/running-exploit.png" alt="Running exploit" className='mx-auto my-6' width={800} height={500} />
            <p className="my-4">A call back was received and a reverse shell was granted as the “alpha” user. The privileges
                granted by the exploit will always match the ones of the user owning the process.</p>
            <Image src="/assets/security/buffer-overflow/reverse-shell.png" alt="Reverse shell" className='mx-auto my-6' width={800} height={500} />



            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Conclusion</h2>
            <p className="my-4">Stack Buffer Overflow is one of the oldest and most common vulnerabilities exploited by
                attackers to gain unauthorized access to vulnerable systems.</p>
            <p className="my-4 mb-16">Control-flow integrity schemes should be implemented to prevent redirection to arbitrary code,
                prevent execution of malicious code from the stack and randomize the memory space layout to
                make it harder for attackers to find valid instruction addresses to jump to certain sectors of the
                memory that may contain executable malicious code.
            </p>

            <hr className='h-[12px]'/>
        </div>
    )
}

export default page