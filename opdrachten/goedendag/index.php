<?php

date_default_timezone_set('Europe/Amsterdam');

$change     =   '';
$hour       =   date('H');
$time       =   date('H:i:s');
$morning    =   date('06:00');
$afternoon  =   date('12:00');
$evening    =   date('18:00');
$night      =   date('00:00');

if ($hour >= 6 && $hour <=11) {
    $change = 'morning';
} elseif ($hour >=12 && $hour <=17) {
    $change = 'afternoon';
} elseif ($hour >=18 && $hour <=23) {
    $change = 'evening';
} elseif ($hour >=0 && $hour <=5) {
    $change = 'night';
}

?>

<head>
    <title>Time Revealer</title>
    <meta charset="utf-8" />
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
    <script>
      function timedRefresh(timeoutPeriod) {
	       setTimeout("location.reload();",timeoutPeriod);
      }
      window.onload = timedRefresh(1000);

    </script>
</head>
<body class="<?= $change ?>">
    <article id="first">
        <h1>Good</h1>
        <?php
            echo $change;
        ?>
        <p>!</p>
    </article>
    <article>
        <h2>The time is:</h2>
        <?php
            echo $time;
        ?>
    </article>
</body>
