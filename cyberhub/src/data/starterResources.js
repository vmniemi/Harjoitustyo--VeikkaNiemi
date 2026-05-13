export const starterResources = [
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
}];