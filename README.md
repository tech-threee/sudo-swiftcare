# Sudo Management Console
This repository contains the console for the executive staff of the hospital like the Board of Directors, Chief Executive Officers and so on. This console is primarily for viewing employees, patients, managing leave schedules, viewing and managing payslips and viewing automated reports.


NB: For the first release of this software, the features currently available are
- Viewing employees
- Viewing patient details
- Account authentication and management

## How To Access
The software is hosted using Netlify using [this url](https://sudo-swiftcare.netlify.app)

## How To Use 
1. In order to get access to the application, one would have to login by providing a `Staff ID` and a `pin`
![](/screenshots/login.png)

2. After logging in, the user will see the Dashoard page which is a summary of the statistics of the system.
![](/screenshots/dashboard.png)

3. From there, they can visit the messages page to view in-app messages sent from other users of the application by using the navigation bar on the left hand side

4. The can visit the staff page to view details about the staff of the hospital

5. They can also visit the patients page to view relevant information about the patients that have registered onto the system

The long-term goal of the software is to include features to allow the user view the leave schedules of emplyees, viewsystem generated reports and view relevant invoices made using the system for further enhance their management.


## Stack
This software was built using 
1. [Next.js](https://nextjs.org/)
2. [TailwindCSS](https://tailwindcss.org/)
3. [Shadcn UI](https://ui.shadcn.com/)

