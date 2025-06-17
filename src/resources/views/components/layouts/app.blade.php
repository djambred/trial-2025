<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Scholar Livewire</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  @livewireStyles

  <!-- Stylesheets -->
  <link rel="preconnect" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap">
  {{-- <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"> --}}
  <link rel="stylesheet" href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}">
  <link rel="stylesheet" href="{{ asset('css/fontawesome.css') }}">
  <link rel="stylesheet" href="{{ asset('css/templatemo-scholar.css') }}">
  <link rel="stylesheet" href="{{ asset('css/owl.css') }}">
  <link rel="stylesheet" href="{{ asset('css/animate.css') }}">
  <link rel="preconnect" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>

</head>
<body>
  {{ $slot }}

  @livewireScripts

  <!-- JavaScript -->
  <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
  <script src="{{ asset('vendor/bootstrap/js/bootstrap.min.js') }}"></script>
  <script src="{{ asset('js/isotope.min.js') }}"></script>
  <script src="{{ asset('js/owl-carousel.js') }}"></script>
  <script src="{{ asset('js/counter.js') }}"></script>
  <script src="{{ asset('js/custom.js') }}"></script>
</body>
</html>
