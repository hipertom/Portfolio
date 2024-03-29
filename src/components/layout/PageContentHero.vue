<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import SocialIcons from "./../elements/SocialIcons.vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCakeCandles, faEarthEurope, faLanguage, faLocationDot } from '@fortawesome/free-solid-svg-icons'

let intros = [
  "They say the best things in life happen behind the scenes. Well, I'm the one behind the scenes building the APIs and databases that power your favorite apps. Want to peek under the hood?",
  "I'm a backend developer. Yes, I can talk to computers. No, I can't explain why your printer keeps eating your documents. But hey, at least your website will run smoothly!",
  "They say caffeine and coding go hand in hand. Well, I'm here to prove that with a little bit of skill, you can spill less coffee than you write bugs. Let's see my projects, shall we?",
  "Enter at your own risk.  I'm a developer, and while my code usually works, there's always a chance you'll witness a glorious logic error.  See my portfolio for proof (hopefully with more successes than fails).",
  "Turning ideas into reality, one line of code at a time. Dive into my portfolio to see my projects!",
]
let randomIntro = ref(rand(null, intros.length))

let intervalId
onMounted(() => {
  intervalId = setInterval(() => {
    randomIntro.value = rand(randomIntro.value, intros.length)
  }, 5000)
})
onUnmounted(() => clearInterval(intervalId))

const introHeight = computed(() => {
  return ""
  // return introElement.value.offsetHeight
})

// Get random index that is not the same as previous.
function rand(previous, range) {
  let temp = Math.floor(Math.random() * range)
  return temp == previous ? rand(previous, range) : temp
}

</script>

<template>
  <section class="home_banner_area" id="hero">
    <div class="container box_1620">
      <div class="banner_inner d-flex align-items-center">
        <div class="banner_content">
          <div class="media">
            <div class="media-profile">
              <img src="@/assets/img/tom-grootjans.jpeg" alt="">
            </div>
            <div class="media-body">
              <div class="personal_text">
                <h6>Hello, I am</h6>
                <h3>Tom&nbsp;<br>Grootjans</h3>
                <h4 ref="introElement">Backend developer and team lead at ZIGT</h4>

                <div style="height: 200px;">
                  <template v-for="(intro, index) in intros" v-bind:key="index">
                    <Transition name="fade" appear>
                      <p v-if="index == randomIntro" style="position: absolute;" >
                        {{ intro }}
                      </p>
                    </Transition>
                  </template>
                </div>

                <ul class="list basic_info">
                  <li><span style="width: 25px; display: inline-block;"><FontAwesomeIcon :icon="faCakeCandles" /></span> 29 years old</li>
                  <li><span style="width: 25px; display: inline-block;"><FontAwesomeIcon :icon="faLocationDot" />  </span> Zoetermeer</li>
                  <li><span style="width: 25px; display: inline-block;"><FontAwesomeIcon :icon="faEarthEurope" />  </span> The Netherlands</li>
                  <li><span style="width: 25px; display: inline-block;"><FontAwesomeIcon :icon="faLanguage" />  </span> Dutch & English</li>
                </ul>

                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
