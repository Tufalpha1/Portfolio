import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div className='w-full my-32 sm:mt-48 px-8 sm:px-32 overflow-hidden'>
            <h1 className='text-4xl sm:text-6xl my-8 tracking-tighter'>Use Ettercap to Intercept Passwords with ARP Spoofing</h1>
            <hr className='h-[12px]' />

            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>What is ARP spoofing?</h2>
            <p className='my-4'>ARP spoofing is an attack against an Ethernet or Wi-Fi network to get between the router
                and the target user. In an ARP-spoofing attack, messages meant for the target are sent to
                the attacker instead, allowing the attacker to spy on, deny service to, or man-in-the-middle
                a target. One of the most popular tools for performing this attack is Ettercap, which comes
                preinstalled on Kali Linux.
            </p>
            <p className='my-4'>On a regular network, messages are routed over Ethernet or Wi-Fi by associating the MAC
                address of a connected device with the IP address used to identify it by the router. Usually,
                this happens via an Address Resolution Protocol (ARP) message indicating which {`device's`}
                MAC address goes with which IP address. It lets the rest of the network know where to
                send traffic — but it can be easily spoofed to change the way traffic is routed.
            </p>
            <p className='my-4'>In an ARP-spoofing attack, a program like Ettercap will send spoofed messages
                attempting to get nearby devices to associate the {`hacker's`} MAC address with the IP
                address of the target. When successful, they are stored temporarily in a configuration
                setting on other network devices. If the rest of the network starts delivering packets
                intended for the target to the attacker instead, the attacker effectively controls the {`target's`}
                data connection.
            </p>



            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Ettercap Graphical</h2>
            <p className="my-4">One of the most intriguing programs installed by default in Kali Linux is Ettercap. Unlike
                many of the programs that are command-line only, Ettercap features a graphical interface
                that is very beginner-friendly. While the results may sometimes vary, Ettercap is an
                excellent tool for newbies to get the hang of network attacks like ARP spoofing. If you
                do not already have it (like if you downloaded a light version of Kali), you can get it by typing
                the following into a terminal window.
            </p>
            <code className='font-bold bg-gray-200 px-2'>apt install ettercap-graphical</code>
            <p className="my-4">Ettercap is not the only tool for this, nor is it the most modern. Other tools, such
                as Bettercap, claim to do what Ettercap does but more effectively. However, Ettercap
                proves useful enough to feature for our demonstration. The general workflow of an Ettercap ARP spoofing attack is to join a network you want to attack, locate hosts on the
                network, assign targets to a "targets" file, and then execute the attack on the targets.
            </p>
            <p className="my-4">Once we do all of that, we can figuratively watch over the {`target's`} shoulder as they browse
                the internet, and we can even kill the connection from websites we want to steer them
                away from. We can also run various payloads, like isolating a host from the rest of the
                network, denying them service by dropping all packets sent to them, or running scripts to
                attempt to downgrade the security of the connection.
            </p>


            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Connect to Network</h2>
            <p className="my-4">The first step of ARP spoofing is to connect to the network you want to attack. If you are
                attacking an encrypted WEP, WPA, or WPA2 network, you will need to know the password.
                This is because we are attacking the network internally, so we need to be able to see some
                information about the other hosts on the network and the data passing within it. You can
                connect to a network for ARP spoofing in two ways. The first is to connect via Ethernet,
                which is very effective but may not always be practical and is rarely subtle. Instead, many
                people prefer to use a wireless network adapter and perform the ARP spoofing over WiFi.
            </p>



            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Start Ettercap</h2>
            <p className="my-4">In Kali, click on "Applications," then "Sniffing & Spoofing," followed by "ettercap-graphical."
                Alternatively, click on the "Show Applications" option in the dock, then search for and
                select "Ettercap."
            </p>
            <Image src="/assets/security/arp-poisoning/ettercap.png" alt="Finding Ettercap" className='mx-auto my-6' width={600} height={500} />
            <p className="my-4">Once it starts up, you should find yourself on the Ettercap main screen. You will see the
                spooky Ettercap logo, and a few drop-down menus to start the attack from. In the next
                step, we will start exploring the "Sniff" menu.
            </p>
            <Image src="/assets/security/arp-poisoning/ettercap-2.png" alt="Finding Ettercap" className='mx-auto my-6' width={600} height={500} />



            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Select Network Interface to Sniff On:</h2>
            <p className="my-4">Click on the "Sniff" menu item, and then select "Unified sniffing." A new window will open
                asking you to select which network interface you want to sniff on. You should select the
                network interface that is currently connected to the network you are attacking. In my case
                it was eth0.
            </p>
            <p className="my-4">Now, you will see some text confirming that sniffing has started, and you will be able to access
                more advanced menu options such as Targets, Hosts, Mitm, Plugins, etc. Before we get
                started using any of them, we will need to identify our target on the network.
            </p>
            <Image src="/assets/security/arp-poisoning/sniffing-network.png" alt="Sniffing network" className='mx-auto my-6' width={600} height={500} />



            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Identify Hosts on Network</h2>
            <p className="my-4">To find the device we want to attack on the network, Ettercap has a few tricks up its sleeve.
                First, we can do a simple scan for hosts by clicking "Hosts," then "Scan for hosts." A scan
                will execute, and after it finishes, you can see the resulting hosts Ettercap has identified
                on the network by clicking "Hosts," then "Hosts list."
            </p>
            <Image src="/assets/security/arp-poisoning/identifying-hosts.png" alt="Identifying hosts" className='mx-auto my-6' width={600} height={500} />
            <p className="my-4">FYI the ip addresses 192.168.171.2 and 192.168.171.138 are of my virtual router and windows
                virtual machine respectively.</p>




            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Select Hosts to Target with ARP Spoofing</h2>
            <p className="my-4">Now that we have identified our {`target's`} IP address, it is time to add them to a target list. Once
                we do this, we will be telling Ettercap that we want to designate that IP address as one we
                want to pretend to be, so that we are receiving messages from the router that were meant
                to be sent to the target.
            </p>
            <p className="my-4">Go back to the "Hosts" screen, and select the IP address of the target you want to target.
                Click the IP address to highlight it, then click on "Targets," followed by "Target list," to see
                a list of devices that have been targeted for ARP spoofing.
            </p>
            <Image src="/assets/security/arp-poisoning/selecting-hosts.png" alt="Selecting hosts" className='mx-auto my-6' width={600} height={500} />




            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Launch Attack on Targets</h2>
            <p className="my-4">Click on the "Mitm" menu, and select "ARP poisoning." A popup will open, and you need to select
                "Sniff remote connections" to begin the sniffing attack.</p>
            <Image src="/assets/security/arp-poisoning/sniff-remote-connections.png" alt="Sniffing remote connections" className='mx-auto my-6' width={370} height={475} />
            <p className="my-4">Once this attack has begun, you will be able to intercept login credentials if the user you are
                targeting enters them into a website that does not use HTTPS. This could be a router or a
                device on the network or even a website that uses poor security.
            </p>
            <Image src="/assets/security/arp-poisoning/victims.png" alt="Victims list" className='mx-auto my-6' width={400} height={500} />




            <h2 className='text-2xl sm:text-3xl tracking-tighter my-2 pt-12'>Try Intercepting a Password</h2>
            <p className="my-4">Now, let's actually try intercepting a password. A website that's great for testing
                is aavtain.com, which deliberately uses bad security so that you can intercept
                credentials. On the target device, navigate to http://testphp.vulnweb.com/ Once
                it loads, you'll see a login screen you can enter a fake login and password into.
            </p>
            <Image src="/assets/security/arp-poisoning/intercepting-password.png" alt="Intercepting password" className='mx-auto my-6' width={600} height={500} />
            <p className="my-4">Enter a username and password, then hit "Submit." If Ettercap is successful, you should
            see the login and password you typed appear on the attacker's screen!</p>
            <Image src="/assets/security/arp-poisoning/sniffed-credentials.png" alt="Intercepted password" className='mx-auto my-6' width={600} height={500} />
            <p className="my-16">In this result above, we can see that Ettercap successfully ARP poisoned the target and
            intercepted an HTTP login request the target was sending to an insecure website.</p>


            <hr className='h-[12px]'/>

        </div>
    )
}

export default page