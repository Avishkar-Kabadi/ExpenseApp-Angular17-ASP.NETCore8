# Introduction :  Expense App Asp.Net Core 8 Web API with Angular 17


Welcome to the Expense Manager App! This application is built using Angular 17 and ASP.NET Core 8. It is designed to provide basic operations related to managing expenses.

 - Add and Edit Expenses: Easily add new expenses and edit existing ones to keep your records accurate.

 - Expense Categories: Organize your expenses by categories for better analysis.

 - Date Range Filter: Filter expenses based on specific date ranges for a customized view.

 - Expense Summary: View a summary of your expenses to understand your financial patterns.


## Installation

Prerequisites

- Node.js: Make sure you have Node.js installed on your machine.

- Angular CLI: Install the Angular CLI globally by running npm install -g @angular/cli.

- Visual Studio or Visual Studio Code: You will need an IDE for ASP.NET Core development.

### Getting Started

Clone the repository:



**Copy code**

` git clone https://github.com/Avishkar-Kabadi/Expense-app.git `



## Frontend Setup:



**Copy code**

` cd expense-manager-app/frontend `

` npm install`

` ng serve`

**Open your browser and navigate to http://localhost:4200/ to access the Angular app.**



## Backend Setup:

With this project I have implemented Asp.Net Core 8 Web API with Angular 17 Application Complete.

### Dependencies Web API
#### PackegesNuget:
>- EntityFramework
>- Microsoft.EntityFrameworkCore
>- Microsoft.EntityFrameworkCore.Design
>- Microsoft.EntityFrameworkCore.SqlServer
>- Microsoft.EntityFrameworkCore.SqlServer.Design
>- Microsoft.EntityFrameworkCore.Tools
>- Swashbuckle.AspNetCore

- Open the backend solution in Visual Studio or Visual Studio Code.

- If using Visual Studio, press F5 to run the application.

- If using Visual Studio Code, run the following commands in the terminal:


- **Copy code**

` cd expense-manager-app/backend`

` dotnet build`

` dotnet run`

- **The backend server will start running at http://localhost:7086/.**


## Database Setup:

- Ensure that your SQL Server is running.

- Update the database connection string in the appsettings.json file.

- Run Migrations:

- Run the following commands in the terminal from the backend directory:




 **Copy code**

` dotnet ef migrations add InitialMigration`

` dotnet ef database update`

  Now, you should have the Expense Manager App up and running!


## Contributing

*Contributions are welcome! If you find any issues or have suggestions for improvement, 
please create an issue or submit a pull request.*


