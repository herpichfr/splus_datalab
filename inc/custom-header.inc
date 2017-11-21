<div id="header">

    <!-- Logo -->
    <h1 style="color:#fff;"><a href="../index.php" id="logo">NOAO Data Lab</a></h1>
    <div style="text-align: right;color:#fff;">
        <span class="user-welcome" style="text-align: right;padding-right:10px;">Hi <i class="user-name">datalab</i> | <a class="logout">Logout</a></span>
        <span class="guest-welcome" style="display: none;padding-right:10px;"><a href="../login.php">Login</a> | <a href="../register.php">Sign up</a></span>
    </div>

    <!-- Nav -->
    <nav id="nav">
        <ul>
            <li class="home"><a href="../index.php"><img src="../img/Data-Lab-Logo.png" height="60"
                                                      style="vertical-align: middle; border-radius: 5px;"><span
                        id="home-text">Home</span></a></li>
            <li class="about"><a href="../about.php">About</a>
                <ul>
                    <li><a href="../people.php">People</a></li>
                    <li><a href="https://www.noao.edu/noao/library/NOAO_Data_Lab_Publications.html">Data Lab Publications</a></li>
                    <li><a href="http://datalab.noao.edu/docs/manual/UsingTheNOAODataLab/Introduction/AcknowledgementOfDataLab/AcknowledgementOfDataLab.html">Acknowledgements</a></li>
                    <li><a href="../disclaimers.php">Disclaimers</a></li>
                </ul>
            </li>
            <li class="start"><a href="../start.php">Getting Started</a>
                <ul>
                    <li><a href="../register.php">Create a new account</a></li>
                    <li><a href="http://datalab.noao.edu/notebooks">Launch a Jupyter notebook</a></li>
                    <li><a href="https://github.com/noao-datalab/datalab-client">Download client package</a></li>
                    <li><a href="http://datalab.noao.edu/docs/manual/UsingTheNOAODataLab/ScienceExamples/index.html">Explore Science Examples</a></li>
                </ul>
            </li>

            <li class="tools"><a href="../tools.php">Tools</a>
                <ul>
                    <li><a href="../discovery.php">Discovery Tools</a></li>
                    <li><a href="../query.php">Query Interface</a></li>
                    <li><a href="../analysis.php">Analysis Tools</a></li>
                </ul>
            </li>
            <li class="survey"><a href="../survey.php">Survey Data</a>
                <ul>
                    <li><a href="../smash/smash.php">SMASH</a></li>
                    <li><a href="../decals/ls.php">DECaLS</a></li>
                    <li><a href="../desdr1/index.html">DES DR1</a></li>
                </ul>
            </li>
            <li class="docs"><a href="../docs.php">Docs/Help</a>
                <ul>
                    <li><a href="http://datalab.noao.edu/help">Helpdesk</a></li>
                    <li><a href="../docs/manual/index.html">User manual</a></li>
                    <li><a href="../docs/api/index.html">API documentation</a></li>
                </ul>
            </li>
            <li class="events"><a href="../events.php">Events</a></li>
        </ul>
    </nav>

</div>
<script type="text/javascript">
    jQuery(document).ready(function($){
        if (localStorage.getItem('username')) {
            $('.user-name').html(localStorage.getItem('username'));
            $('.user-welcome').show();
            $('.guest-welcome').hide();
        } else {
            $('.user-welcome').hide();
            $('.guest-welcome').show();
        }
        $('.logout').click( function() {
            localStorage.clear();
            if (location.href.indexOf('profile') == -1) {
                location.reload();
            }
            else {
                window.location.href = 'tools.php';
            }
            return false;
        });
    });


</script>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-104114159-1', 'auto');
    ga('send', 'pageview');

</script>