<template>
  <div>
    <section>
      <div class="flex items-center justify-between h-full m-auto mt-1 w-2/3">
        <div class="flex flex-wrap items-center justify-between w-full">
          <div class="w-full md:w-1/2">
            <div
              :class="cubeClass"
              class="cube"
            >
              <img
                src="/images/cube/pixel_cube1_top.png"
                alt=""
                class="top-side"
              >
              <img
                src="/images/cube/pixel_cube1_bottom.png"
                alt=""
                class="bottom-side"
              >
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="p-12">
              <h1 class="text-5xl">PixelCube</h1>
              <h3>A DIY cube to track your time in a fun way.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="highlight-1">
      <div class="m-auto mt-16 w-2/3">
        <div class="bg-grey-lightest p-12 rounded-lg shadow-md">
          <h3 class="text-2xl mb-5">What is it?</h3>
          <p class="text-lg mb-2">PixelCube is an Open Source project to build a time tracking cube!</p>
          <p class="text-lg mb-2">Each side is configurable using an Electron App – each time you flip a side up, it starts tracking time towards that side.</p>
          
          <div class="w-full mt-8">
            <div class="sketchfab-embed-wrapper"><iframe width="640" height="480" src="https://sketchfab.com/models/8515f1621d4640148664bd067731b80e/embed?autostart=1" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

            <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">
                <a href="https://sketchfab.com/3d-models/pixel-cube-full-8515f1621d4640148664bd067731b80e?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Pixel Cube - Full</a>
                by <a href="https://sketchfab.com/marcos10soares?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">marcos10soares</a>
                on <a href="https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>
            </p>
            </div>
          </div>

        </div>

        <div class="bg-grey-lightest p-12 rounded-lg shadow-md text-center mt-8">
          <h3 class="text-2xl mb-5">Got the cube already? Download the app!</h3>
          <a
            href="/build/pixelcube-0.0.2.dmg"
            target="download"
            class="bg-white hover:bg-grey-light py-5 px-6 inline-block rounded-full shadow-md"
          >
            <img
              src="/favicons/android-chrome-192x192.png"
              alt="Logo"
              style="height: 50px;"
            ></a>
          <p class="text-xs mt-4">This is a Mac build.<br>You can create a build for your OS by following the Readme in the <a href="https://github.com/mstrlaw/pixel_cube" target="_blank">Github</a>.</p>
        </div>
      </div>
    </section>

    <section class="highlight">
      <div class="m-auto w-2/3">
        <div class="bg-grey-lightest p-12 rounded-lg shadow-md mb-16">
          <h3 class="text-2xl mb-5">What do I need?</h3>
          <p class="text-lg mb-2">Here's the specs used for PixelCube. You can use other hardware of couse.</p>
          
          <hr class="border mt-8">
          <div class="flex items-center justify-between">
            <div class="img w-1/2">
              <img
                src="/images/specs/arduino.png"
                alt=""
                class="top-side"
              >
            </div>
            <div class="spec w-1/2 p-5">
              <h2>Arduino Nano - Atmega 328p</h2>
            </div>
          </div>
          
          <hr class="border mt-8">
          <div class="flex items-center justify-between">
            <div class="img w-1/2">
              <img
                src="/images/specs/battery.png"
                alt=""
                class="top-side"
              >
            </div>
            <div class="spec w-1/2 p-5">
              <h2>2x 3.7 400mah Li-Po Batteries</h2>
            </div>
          </div>

          <hr class="border mt-8">
          <div class="flex items-center justify-between">
            <div class="img w-1/2">
              <img
                src="/images/specs/bluetooth-hc-06.png"
                alt=""
                class="top-side"
              >
            </div>
            <div class="spec w-1/2 p-5">
              <h2>Bluetooth Low Energy - HC-06</h2>
            </div>
          </div>

          <hr class="border mt-8">
          <div class="flex items-center justify-between">
            <div class="img w-1/2">
              <img
                src="/images/specs/led-rgb.png"
                alt=""
                class="top-side"
              >
            </div>
            <div class="spec w-1/2 p-5">
              <h2>2x RBG Led - 5mm OR 6 5mm LED with different colours</h2>
            </div>
          </div>

          <hr class="border mt-8">
          <div class="flex items-center justify-between">
            <div class="img w-1/2">
              <img
                src="/images/specs/mpu-6050.png"
                alt=""
                class="top-side"
              >
            </div>
            <div class="spec w-1/2 p-5">
              <h2>MPU 6050 - Gyroscope & Accelerometer</h2>
            </div>
          </div>

          <hr class="border mt-8">
          <div class="flex items-center justify-between">
            <div class="img w-1/2">
              <img
                src="/images/specs/pixel_cube-assembly.png"
                alt=""
                class="top-side"
              >
            </div>
            <div class="spec w-1/2 p-5">
              <h2>Casing</h2>
            </div>
          </div>

        </div>
      </div>
      <footer class="m-auto w-2/3 my-16">
        <a
          href="https://github.com/mstrlaw/pixel_cube"
          target="_bkank"
        >Github</a>
      </footer>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      cubeClass: ''
    }
  },
  mounted() {
    setTimeout( () => {
      this.cubeClass = 'collapsed'
    }, 0)
  },
  methods: {
    animateCube() {

    }
  }
}
</script>

<style lang="scss">
  
  $grey-light: #F6F9FC;
  $blue: #78bcff;

  body, html{
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }

  section{
    position: relative;
    height: 100vh;
    
    &:before{
      content: "";
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      -webkit-transform: skewY(12deg);
      transform: skewY(12deg);
      z-index: -20;
      background-color: $grey-light;
      transition: background .5s;
    }

    &.highlight-1{
      &:before{
        -webkit-transform: skewY(-12deg);
        transform: skewY(-12deg);
        background-color: $blue;
      }
    } 
  }

  .cube{
    &.collapsed{
      .top-side{
        opacity: 1;
        transform: translateY(50%);
        transition: transform 1.5s, opacity .5s;
        transition-delay: .5s;
      }
      .bottom-side{
        opacity: 1;
        transform: translateY(-50%);
        transition: transform 1.5s, opacity .5s;
        transition-delay: .5s;
      }
    }

    .top-side, .bottom-side{
      position: relative;
      transition: transform 1.5s, opacity .5s;
      opacity: 0;
    }

    .top-side{
      transform: translateY(20%);
      z-index: 10;      
    }

    .bottom-side{
      transform: translateY(-20%);
      z-index: 5;
    }
  }
</style>
