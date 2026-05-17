export const starterResources = [
  
  // Networking
  
  {
    id: "osi-model",
    title: "OSI Model",
    category: "Networking",
    difficulty: "Beginner",
    summary:
      "The OSI model explains network communication using seven conceptual layers.",
    content:
      "The OSI model is a learning framework that divides network communication into seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. It helps learners understand where different protocols and devices fit, such as Ethernet at lower layers, IP at the network layer, TCP at the transport layer, and HTTP at the application layer.",
    tags: ["networking", "models", "fundamentals"],
  },
  {
    id: "tcp-vs-udp",
    title: "TCP vs UDP",
    category: "Networking",
    difficulty: "Beginner",
    summary:
      "TCP focuses on reliable delivery, while UDP focuses on speed and simplicity.",
    content:
      "TCP is connection-oriented and provides reliability features such as retransmission, ordering, and flow control. UDP is connectionless and has less overhead, making it useful for applications where speed matters more than guaranteed delivery, such as streaming, gaming, and DNS queries.",
    tags: ["networking", "protocols", "tcp", "udp"],
  },
  {
    id: "dns-basics",
    title: "DNS Basics",
    category: "Networking",
    difficulty: "Beginner",
    summary:
      "DNS translates domain names into IP addresses so browsers can find servers.",
    content:
      "The Domain Name System, or DNS, works like the internet's address book. When a user visits a domain name, DNS helps find the matching IP address. Security topics related to DNS include spoofing, filtering, logging, and secure configuration.",
    tags: ["networking", "domains", "infrastructure"],
  },
  {
    id: "dhcp-basics",
    title: "DHCP Basics",
    category: "Networking",
    difficulty: "Beginner",
    summary:
      "DHCP automatically gives devices network settings such as IP addresses.",
    content:
      "Dynamic Host Configuration Protocol, or DHCP, allows devices to automatically receive network configuration such as IP address, subnet mask, default gateway, and DNS servers. It reduces manual configuration and is commonly used in home, school, and business networks.",
    tags: ["networking", "ip-addressing", "dhcp"],
  },
  {
    id: "arp-basics",
    title: "ARP Basics",
    category: "Networking",
    difficulty: "Intermediate",
    summary:
      "ARP maps IP addresses to MAC addresses inside a local network.",
    content:
      "Address Resolution Protocol, or ARP, is used when a device knows an IP address but needs the matching MAC address to send traffic on the local network. ARP is important for understanding local network communication and security issues such as ARP spoofing.",
    tags: ["networking", "ethernet", "arp", "lan"],
  },

  
  // Linux
  
  {
    id: "linux-permissions",
    title: "Linux File Permissions",
    category: "Linux",
    difficulty: "Beginner",
    summary:
      "Linux permissions control who can read, write, and execute files.",
    content:
      "Linux files have permissions for the owner, group, and others. Permissions are commonly shown as read, write, and execute bits. Understanding permissions is important for system hardening, troubleshooting, and avoiding accidental exposure of sensitive files.",
    tags: ["linux", "permissions", "hardening"],
  },
  {
    id: "grep-command",
    title: "grep Command",
    category: "Linux",
    difficulty: "Beginner",
    summary:
      "grep searches text using words or patterns and is useful for logs and files.",
    content:
      "The grep command searches text from files or command output. It is useful for finding errors in logs, searching configuration files, and filtering command output. For example, defenders often use grep to quickly find suspicious strings or failed login attempts in log files.",
    tags: ["linux", "terminal", "logs", "grep"],
  },
  {
    id: "find-command",
    title: "find Command",
    category: "Linux",
    difficulty: "Beginner",
    summary:
      "find searches for files and directories based on names, types, sizes, and dates.",
    content:
      "The find command is useful for locating files in Linux systems. It can search by filename, file type, size, modification time, or permissions. In security work, it can help locate unusual files, world-writable files, or recently changed files.",
    tags: ["linux", "terminal", "files"],
  },
  {
    id: "ps-command",
    title: "ps Command",
    category: "Linux",
    difficulty: "Beginner",
    summary:
      "ps shows running processes and helps users inspect what is active on a system.",
    content:
      "The ps command lists running processes. It is useful for troubleshooting, system monitoring, and security investigations. A common command is ps aux, which shows detailed information about processes, users, CPU usage, memory usage, and commands.",
    tags: ["linux", "processes", "monitoring"],
  },
  {
    id: "systemctl-basics",
    title: "systemctl Basics",
    category: "Linux",
    difficulty: "Intermediate",
    summary:
      "systemctl is used to manage services on many Linux systems.",
    content:
      "systemctl controls systemd services. It can start, stop, restart, enable, disable, and check the status of services. This is useful for managing web servers, SSH, databases, and security tools on Linux systems.",
    tags: ["linux", "services", "systemd"],
  },

  
  // Web Security
  
  {
    id: "xss-basics",
    title: "Cross-Site Scripting",
    category: "Web Security",
    difficulty: "Beginner",
    summary:
      "A web vulnerability where untrusted input is executed as JavaScript in a user's browser.",
    content:
      "Cross-Site Scripting, or XSS, happens when a website includes untrusted input in a page without proper output encoding. It matters because malicious scripts can change page content, steal sensitive data, or perform actions as another user. Common defenses include output encoding, input validation, safe framework defaults, and Content Security Policy.",
    tags: ["web", "javascript", "browser", "input-validation"],
  },
  {
    id: "sql-injection-basics",
    title: "SQL Injection",
    category: "Web Security",
    difficulty: "Intermediate",
    summary:
      "A vulnerability where untrusted input changes the meaning of a database query.",
    content:
      "SQL Injection happens when user input is inserted into a database query without safe handling. It can allow attackers to read, change, or delete data. Common defenses include prepared statements, parameterized queries, input validation, and limiting database permissions.",
    tags: ["web", "database", "input-validation"],
  },
  {
    id: "csrf-basics",
    title: "Cross-Site Request Forgery",
    category: "Web Security",
    difficulty: "Intermediate",
    summary:
      "An attack where a user's browser is tricked into sending an unwanted request.",
    content:
      "Cross-Site Request Forgery, or CSRF, abuses the fact that browsers automatically include cookies with requests. If a user is logged in, a malicious page may try to trigger an action on another site. Defenses include CSRF tokens, SameSite cookies, and checking request origins.",
    tags: ["web", "browser", "authentication"],
  },
  {
    id: "idor-basics",
    title: "Insecure Direct Object Reference",
    category: "Web Security",
    difficulty: "Intermediate",
    summary:
      "IDOR happens when users can access objects they should not be allowed to access.",
    content:
      "Insecure Direct Object Reference, or IDOR, happens when an application exposes an internal object reference such as a user ID, file ID, or order number without proper authorization checks. The main defense is to check permissions on the server side for every sensitive object access.",
    tags: ["web", "authorization", "access-control"],
  },
  {
    id: "path-traversal",
    title: "Path Traversal",
    category: "Web Security",
    difficulty: "Intermediate",
    summary:
      "Path traversal allows unsafe file paths to access files outside the intended folder.",
    content:
      "Path traversal occurs when an application uses user-controlled file paths without proper validation. Attackers may try to move outside the intended directory using path sequences. Defenses include allowlists, safe file handling, path normalization, and avoiding direct use of user input in file paths.",
    tags: ["web", "files", "input-validation"],
  },

  
  // Tools
  
  {
    id: "nmap-basics",
    title: "Nmap Basics",
    category: "Tools",
    difficulty: "Beginner",
    summary:
      "Nmap is a network scanning tool used to discover hosts, services, and open ports.",
    content:
      "Nmap is commonly used by administrators, defenders, and security learners to understand what services are exposed on a network. In ethical use, it should only be used on systems you own or have permission to test.",
    tags: ["networking", "scanning", "tools"],
  },
  {
    id: "wireshark-basics",
    title: "Wireshark Basics",
    category: "Tools",
    difficulty: "Beginner",
    summary:
      "Wireshark is a packet analysis tool used to inspect network traffic.",
    content:
      "Wireshark helps users inspect packets and understand protocols such as TCP, DNS, HTTP, and TLS. It is useful for troubleshooting, learning networking, and investigating suspicious traffic.",
    tags: ["networking", "packets", "blue-team"],
  },
  {
    id: "owasp-zap-basics",
    title: "OWASP ZAP Basics",
    category: "Tools",
    difficulty: "Beginner",
    summary:
      "OWASP ZAP is a web security testing proxy used to inspect and test web traffic.",
    content:
      "OWASP ZAP can intercept browser traffic, inspect requests and responses, and help identify common web security issues. It is useful for learning web security in legal lab environments.",
    tags: ["tools", "web", "proxy"],
  },
  {
    id: "ffuf-basics",
    title: "ffuf Basics",
    category: "Tools",
    difficulty: "Intermediate",
    summary:
      "ffuf is a fast web fuzzer used to discover files, directories, and parameters.",
    content:
      "ffuf is commonly used in legal testing environments to discover hidden paths, virtual hosts, or parameters by sending many requests with different wordlist entries. It is useful for learning how web content discovery works and why unused routes should not expose sensitive information.",
    tags: ["tools", "web", "fuzzing"],
  },
  {
    id: "ghidra-basics",
    title: "Ghidra Basics",
    category: "Tools",
    difficulty: "Advanced",
    summary:
      "Ghidra is a reverse engineering tool used to analyze compiled programs.",
    content:
      "Ghidra helps users inspect binaries, decompile code, and understand how compiled software behaves. It is often used in malware analysis, vulnerability research, and reverse engineering education. It should be used responsibly and legally.",
    tags: ["tools", "reverse-engineering", "binaries"],
  },

  
  // Blue Team
  
  {
    id: "least-privilege",
    title: "Principle of Least Privilege",
    category: "Blue Team",
    difficulty: "Beginner",
    summary:
      "Users and systems should only have the permissions they need to perform their tasks.",
    content:
      "The principle of least privilege reduces the damage caused by mistakes, malware, or compromised accounts. For example, a normal user should not have administrator permissions unless they truly need them.",
    tags: ["defense", "access-control", "hardening"],
  },
  {
    id: "firewall-basics",
    title: "Firewall Basics",
    category: "Blue Team",
    difficulty: "Beginner",
    summary:
      "Firewalls control network traffic based on rules.",
    content:
      "A firewall allows or blocks traffic based on rules such as source address, destination address, port, protocol, or application. Firewalls are important for reducing exposed services and limiting unnecessary access.",
    tags: ["defense", "networking", "hardening"],
  },
  {
    id: "log-monitoring",
    title: "Log Monitoring",
    category: "Blue Team",
    difficulty: "Beginner",
    summary:
      "Log monitoring helps defenders notice unusual activity and investigate incidents.",
    content:
      "Logs record events from systems, applications, and networks. Monitoring logs can help identify failed logins, suspicious process activity, configuration changes, and possible attacks. Good logging is important for both detection and investigation.",
    tags: ["defense", "logs", "monitoring"],
  },
  {
    id: "patch-management",
    title: "Patch Management",
    category: "Blue Team",
    difficulty: "Beginner",
    summary:
      "Patch management keeps systems updated against known vulnerabilities.",
    content:
      "Patch management is the process of tracking, testing, and installing updates for operating systems, applications, and devices. It helps reduce the risk of attackers exploiting known vulnerabilities.",
    tags: ["defense", "updates", "vulnerabilities"],
  },
  {
    id: "incident-response",
    title: "Incident Response",
    category: "Blue Team",
    difficulty: "Beginner",
    summary:
      "Incident response is the process of handling security events in an organized way.",
    content:
      "Incident response usually includes preparation, detection, containment, eradication, recovery, and lessons learned. The goal is to reduce damage and improve future defenses.",
    tags: ["defense", "monitoring", "process"],
  },

  
  // Cryptography
  
  {
    id: "hashing-basics",
    title: "Hashing Basics",
    category: "Cryptography",
    difficulty: "Beginner",
    summary:
      "A hash function turns input data into a fixed-length value.",
    content:
      "Hashing is commonly used for integrity checks and password storage. A good password storage system does not store plain-text passwords. Instead, it uses a slow password hashing function with a unique salt.",
    tags: ["cryptography", "passwords", "integrity"],
  },
  {
    id: "encryption-basics",
    title: "Encryption Basics",
    category: "Cryptography",
    difficulty: "Beginner",
    summary:
      "Encryption protects data by making it unreadable without the correct key.",
    content:
      "Encryption transforms readable data into unreadable ciphertext. Only someone with the correct key can decrypt it. Encryption is used to protect files, network traffic, backups, messages, and stored data.",
    tags: ["cryptography", "encryption", "privacy"],
  },
  {
    id: "symmetric-encryption",
    title: "Symmetric Encryption",
    category: "Cryptography",
    difficulty: "Intermediate",
    summary:
      "Symmetric encryption uses the same key for encryption and decryption.",
    content:
      "In symmetric encryption, the same secret key is used to encrypt and decrypt data. It is usually fast and useful for large amounts of data. The main challenge is securely sharing and protecting the secret key.",
    tags: ["cryptography", "encryption", "keys"],
  },
  {
    id: "asymmetric-encryption",
    title: "Asymmetric Encryption",
    category: "Cryptography",
    difficulty: "Intermediate",
    summary:
      "Asymmetric encryption uses a public key and a private key.",
    content:
      "Asymmetric encryption uses a key pair. The public key can be shared, while the private key must be protected. It is used in systems such as TLS, digital signatures, and secure key exchange.",
    tags: ["cryptography", "public-key", "tls"],
  },
  {
    id: "password-salting",
    title: "Password Salting",
    category: "Cryptography",
    difficulty: "Beginner",
    summary:
      "A salt is unique random data added before hashing a password.",
    content:
      "Password salting helps protect against precomputed attacks such as rainbow tables. Each password should have a unique salt before being processed by a password hashing function. Salting does not replace strong password hashing, but it is an important part of secure password storage.",
    tags: ["cryptography", "passwords", "hashing"],
  },

  
  // Glossary
  {
    id: "malware-definition",
    title: "Malware",
    category: "Glossary",
    difficulty: "Beginner",
    summary:
      "Malware is software designed to harm, disrupt, spy on, or gain unauthorized access to systems.",
    content:
      "Malware is a broad term for malicious software. Examples include viruses, worms, trojans, ransomware, spyware, and rootkits. Defenses include updates, least privilege, backups, endpoint protection, and careful user behavior.",
    tags: ["glossary", "malware", "defense"],
  },
  {
    id: "phishing-definition",
    title: "Phishing",
    category: "Glossary",
    difficulty: "Beginner",
    summary:
      "Phishing is a social engineering attack that tricks users into revealing information or taking unsafe actions.",
    content:
      "Phishing often uses emails, messages, or fake websites to impersonate trusted organizations. The goal may be to steal passwords, payment details, or access tokens. Defenses include user awareness, MFA, email filtering, and careful URL checking.",
    tags: ["glossary", "social-engineering", "email"],
  },
  {
    id: "vulnerability-definition",
    title: "Vulnerability",
    category: "Glossary",
    difficulty: "Beginner",
    summary:
      "A vulnerability is a weakness that could be exploited to harm security.",
    content:
      "A vulnerability can exist in software, hardware, configuration, processes, or user behavior. Vulnerabilities matter because attackers may exploit them to gain access, steal data, disrupt services, or increase privileges.",
    tags: ["glossary", "risk", "security"],
  },
  {
    id: "exploit-definition",
    title: "Exploit",
    category: "Glossary",
    difficulty: "Beginner",
    summary:
      "An exploit is a method or code that takes advantage of a vulnerability.",
    content:
      "An exploit uses a weakness to cause unintended behavior. In cybersecurity learning, it is important to understand exploits from a defensive and ethical perspective so systems can be tested and protected responsibly.",
    tags: ["glossary", "vulnerability", "risk"],
  },
  {
    id: "mfa-definition",
    title: "Multi-Factor Authentication",
    category: "Glossary",
    difficulty: "Beginner",
    summary:
      "MFA requires more than one proof of identity when logging in.",
    content:
      "Multi-Factor Authentication adds extra protection beyond a password. It may use something you know, something you have, or something you are. MFA helps reduce the risk of account takeover when passwords are stolen or guessed.",
    tags: ["glossary", "authentication", "accounts"],
  },
];