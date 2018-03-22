<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" href="../../favicon.ico">

  <title>Extended Responsive Styleguide</title>
  <link href="assets/css/page-element-styles.css" rel="stylesheet">
 
  <?php include "header.php"; ?>

<div class="page-header">
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="section-title"> Page Elements </h1>
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div id="message-banners" class="row sub-section">
    <div class="sub-sec-title"> Message Banners </div>
    <div class="col">
      <div class="message">
        Suspendisse laoreet dapibus ligula, sit amet consequat ligula sollicitudin quis. Praesent eleifend quam eu elit imperdiet, quis congue nibh dictum. Vestibulum nec lobortis dui. Suspendisse potenti.

        <a href="#"> text link </a>
      </div>

      <div class="message warning">
        Suspendisse laoreet dapibus ligula, sit amet consequat ligula sollicitudin quis. Praesent eleifend quam eu elit imperdiet, quis congue nibh dictum. Vestibulum nec lobortis dui. Suspendisse potenti.

        <a href="#"> text link </a>
      </div>

      <div class="message caution">
        <p>Suspendisse laoreet dapibus ligula, sit amet consequat ligula sollicitudin quis. Praesent eleifend.</p>

        <a href="#"> text link </a>
      </div>
      <div class="details">
        <hr/>
        <h5 class="label">Typical Usage</h5> 
        <p> This should be used anywhere a page title is used. Not to be confused with blog/article titles or section headers.</p>
        <hr/>

        <h5 class="label"> RESPONSIVE SIZES </h5>
        <p class="na"> N/A - INHERIT FROM BODY </p>
      </div>

      <!--MARKUP-->
        <h5 class="label">MARKUP</h5>
        <div class="code">
          <xmp><div class="message">Suspendisse laoreet dapibus ligula, sit amet<a href="#"> text link </a></div></xmp>
        </div>
<br/>
        <div class="code">
          <xmp><div class="message warning">Suspendisse laoreet dapibus ligula, sit amet<a href="#"> text link </a></div></xmp>
        </div>
<br/>
        <div class="code">
          <xmp><div class="message caution">
              <p>Suspendisse laoreet dapibus ligula, sit amet</p>
              <a href="#"> text link </a>
            </div></xmp>
        </div>
    </div>
  </div><!-- /page-title -->



</div> <!-- /.row -->
</div><!-- /.container -->


<div class="page-header">
  <div class="container">
    <div class="row">
      <a id="links"></a>
      <div class="col">
        <h1 class="section-title"> Text Links | Buttons </h1>
      </div>
    </div>
  </div>
</div>


<div class="container">
  <div id="text-links" class="row sub-section">
    <div class="sub-sec-title"> text links </div>
    <div class="col">


      <a href="">This is a text link found in a body of copy.</a>

      <div class="details">
        <hr/>
        <h5 class="label">Typical Usage</h5> 
        <p> This should be used anywhere a page title is used. Not to be confused with blog/article titles or section headers.</p>
        <hr/>

        <h5 class="label"> RESPONSIVE SIZES </h5>
        <p class="na"> N/A - INHERIT FROM BODY </p>
      </div>

      <!--MARKUP-->
        <h5 class="label">MARKUP</h5>
        <div class="code">
          <xmp><a href="#">This is a text link</a></xmp>
        </div>

    </div>
  </div><!-- /page-title -->



</div> <!-- /.row -->
</div><!-- /.container -->


    <!-- Bootstrap core JavaScript
      ================================================== -->
      <!-- Placed at the end of the document so the pages load faster -->
      <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
      <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
      <script src="assets/js/ie10-viewport-bug-workaround.js"></script>


      <script>
        function myFunction() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        } 
      </script>
    </body>
    </html>
