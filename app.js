const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UPSC</title>
</head>

<body style="background-image: url('Blue.jpg'); background-size: cover; background-attachment: fixed; background-position: center; margin: 0; padding: 0;" text="#111111" link="#0066cc" vlink="#551a8b">

    <header id="top">
        <table width="100%" bgcolor="#222222" cellpadding="15" cellspacing="0" border="0">
            <tr>
                <td>
                    <font color="#ffffff"><strong>Union Public Service Commission</strong></font>
                </td>
                <td align="right">
                    <a href="#home"><font color="#ffffff">Home</font></a> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="#about"><font color="#ffffff">About</font></a> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="#form"><font color="#ffffff">Form</font></a>
                </td>
            </tr>
        </table>
    </header>

    <main>
        <!-- Your remaining HTML goes here -->
    </main>

    <footer>
        <table width="100%" bgcolor="#222222" cellpadding="15" cellspacing="0" border="0">
            <tr>
                <td align="center">
                    <font color="#ffffff">&copy; 2026 Empowering citizens. Inspiring change</font>
                </td>
            </tr>
        </table>
    </footer>

</body>
</html>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});