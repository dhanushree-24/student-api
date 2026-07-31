const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UPSC</title>
</head>
<!-- Replaced background attribute with modern inline CSS for a responsive, fixed-scrolling background image -->
<body style="background-image: url('Blue.jpg'); background-size: cover; background-attachment: fixed; background-position: center; margin: 0; padding: 0;" text="#111111" link="#0066cc" vlink="#551a8b">

    <!-- HEADER NAVIGATION AREA -->
    <header id="top">
        <table width="100%" bgcolor="#222222" cellpadding="15" cellspacing="0" border="0">
            <tr>
                <td>
                    <font color="#ffffff"><strong>Union Public Service Commission</strong></font>
                </td>
                <td align="right">
                    <!-- HTML Anchor Links for seamless in-page navigation -->
                    <a href="#home"><font color="#ffffff">Home</font></a> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="#about"><font color="#ffffff">About</font></a> &nbsp;&nbsp;|&nbsp;&nbsp;
                    <a href="#form"><font color="#ffffff">Form</font></a>
                </td>
            </tr>
        </table>
    </header>

    <!-- MAIN CONTENT CONTAINER -->
    <main>
        <br><br>
        
        <!-- MAIN WEBSITE HEADING -->
        <h1 align="center"><font color="#ffffff" size="7" face="Arial">UNION PUBLIC SERVICE COMMISSION</font></h1>
        <p align="center"><font color="#ffffff" size="4" face="Arial">Serving the people of India with excellence.</font></p>
        
        <br>

        <!-- White content container table for maximum readability -->
        <table width="650" bgcolor="#ffffff" cellpadding="35" cellspacing="0" border="0" align="center" style="border-radius: 8px;">
            <tr>
                <td>

                    <!-- HOME SECTION WITH FIG 1.1 -->
                    <section id="home">
                        <h2>Welcome to Our Homepage</h2>
                        <p>The journey to become an IAS officer begins with a passion for public service and a commitment to excellence.</p>
                        
                        <br>
                        <!-- FIGURE 1.1 IMPLEMENTATION -->
                        <div align="center">
                            <!-- Direct, high-quality forest image link applied -->
                            <img src="IAS.png" alt="Indian Administration Service" width="540" border="1"><br>
                            <!-- Semantic Figure Caption label -->
                            <p><strong>Fig 1.1</strong>: <i>Serving the people of India as an IAS officer is my greatest aspiration.</i></p>
                        </div>
                        <br>

                        <p align="right"><a href="#top">Back to top ↑</a></p>
                    </section>
                    
                    <hr size="1" color="#cccccc"><br>

                    <!-- ABOUT SECTION -->
                    <section id="about">
                        <h2>About UPSC</h2>
                        <p>We document a vision of computing technology integrated with public service excellence.</p>
                        <p>Innovation is meaningful when it serves people. Our goal is to bridge the gap between technology and everyday public needs.</p>
                        <p align="right"><a href="#top">Back to top ↑</a></p>
                    </section>
                    
                    <hr size="1" color="#cccccc"><br>

                    <!-- FORM SECTION -->
                    <section id="form">
                        <h2>Registration Form</h2>
                        <form action="#" method="POST">
                            <p>
                                <label for="name"><strong>Name:</strong></label><br>
                                <input type="text" id="name" name="user_name" size="45" required placeholder="Your full name">
                            </p>
                            <p>
                                <label for="number"><strong>Mobile Number:</strong></lable><br>
                                <input type="text" id="number" name="user_number" size="10" required placeholder="Mobile Number">
                            </p>
                            <p>
                                <label for="email"><strong>Email:</strong></label><br>
                                <input type="email" id="email" name="user_email" size="45" required placeholder="Your email address">
                            </p>
                            <p>
                                <label for="message"><strong>Message:</strong></label><br>
                                <textarea id="message" name="user_message" rows="5" cols="43" required placeholder="Write your message here..."></textarea>
                            </p>
                            <p>
                                <input type="submit" value="Submit Information">
                            </p>
                        </form>
                        <p align="right"><a href="#top">Back to top ↑</a></p>
                    </section>

                </td>
            </tr>
        </table>

        <br><br><br>
    </main>

    <!-- FOOTER AREA -->
    <footer>
        <table width="100%" bgcolor="#222222" cellpadding="15" cellspacing="0" border="0">
            <tr>
                <td align="center">
                    <font color="#ffffff">&copy; 2026 Empowering citizens. Inspirimg change </font>
                </td>
            </tr>
        </table>
    </footer>

</body>
</html>");
});

const  PORT= process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});