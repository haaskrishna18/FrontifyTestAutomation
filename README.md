Frontify Test Automation Framework - Instructions
Thank you for accessing the Frontify Test Automation Framework. Below is a step-by-step guide to help you set up and run the tests with ease.
1. Prerequisites:
•	Ensure you have Visual Studio Code (VSCode) installed. If not, download and install it from their official website.
•	Software capable of extracting .rar files (e.g., WinRAR, 7-Zip).
2. Extraction and Setup:
1.	Locate the downloaded .rar file.
2.	Right-click the file and choose 'Extract Here' or use your preferred software to extract it.
3.	Once extracted, you'll find a folder named Frontify Test Automation Krishna.
4.	Dive into this folder to locate the Test Automation Approval directory.
3. Opening in VSCode:
1.	Launch VSCode.
2.	Go to File -> Open Folder...
3.	Browse to the path where you extracted the .rar and select the Test Automation Approval folder.
4.	Click Select Folder.
4. Running the Tests:
Inside VSCode:
1.	Launch the integrated terminal (View -> Terminal or simply `Ctrl + ``` on your keyboard).
2.	Ensure your terminal is opened at the Test Automation Approval level or the Cypress's parent folder level.
To run tests with a visible browser (headed mode):
npx cypress open 
To run tests in the background (headless mode):
npx cypress run 
Upon executing the commands, Cypress will start the tests, and you can observe the results right in the terminal.

