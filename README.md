<h1>Password Generator</h1>
<h4>Welcome to the Password Generator! This tool allows you to generate secure passwords based on various customization options. You can generate simple lowercase passwords, or add upper case letters, numbers, and symbols for enhanced security.</h4>
<br/>
<h2>Usage</h2>
The command-line tool accepts different options to customize your password. Here are the available commands:
<h3>Generate a Simple Lowercase Password</h3>
<h4>If you want a password that only contains lowercase letters, simply run the tool without any options:</h4>
<strong>npx pass-gen</strong>
<h4>This will generate an 8-character password by default.</h4>
<h3>Include Uppercase Letters: To include uppercase letters, add the up argument:</h3>
<strong>npx pass-gen 12 up</strong>
<br/>
<h3>Include Numbers
To add numbers to your password, use the num argument:</h3>
<strong>npx pass-gen 12 num</strong>
<br/>
<h3>Include Symbols: If you want symbols in your password, use the sym argument:</h3>
<strong>npx pass-gen 12 sym</strong>
<br/>
<h3>Combine Options</h3>
<strong>npx pass-gen 12 up num sym
</strong>
<h3>Help Command</h3>
<strong>npx pass-gen -h
</strong>
