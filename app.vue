<template>
  <div class="grid grid-cols-5 h-screen overflow-y-hidden bg-background text-[13.5rem] leading-[11.5rem] font-bold text-secondary">
    
    <div class="col-span-2">
      <div v-for="n in 6">
        0420
      </div>
    </div>

    <div>
      <div v-for="n in 6">
        23
      </div>
    </div>

    <div class="flex flex-col-reverse ">
      <div v-for="index in 7" class="w-full flex justify-center relative top-[-11.5rem]" ref="minutsNode" :class="{ turnDownClass: isAnimatedMinuts }">
        {{ checkMinuts(minutsNumber , index) }}
      </div>
    </div>

    <div class="flex flex-col-reverse ">
      <div v-for="index in 7" class="w-full flex justify-center relative top-[-11.5rem] " ref="secondsNode" :class="{ turnDownClass: isAnimated }">
        {{ checkSeconds(secondsNumber , index) }}
      </div>
    </div>
  </div>

</template>
 
<style scoped>
  .turnDownClass{
    animation: turnDown 400ms cubic-bezier(0.175, 0.885, 0.32, 1.4)
  }
  @keyframes turnDown {
    0%    { transform: translateY(0px)}
    100%  { transform: translateY(184px)}
  }
</style>

<script setup>
  let speed = 1

  let targetDate = new Date('05/05/2023') 
  let currentDate = new Date()
  let msRemaning = targetDate - currentDate
  let daysRemaning = Math.floor(msRemaning/(1000 * 3600 * 24)) 
  let hoursRemaning =  Math.floor((msRemaning - daysRemaning * (1000 * 3600 * 24)) / (1000*3600))
  let minutsRemaning = Math.floor((msRemaning - ((daysRemaning * (1000 * 3600 * 24)) + hoursRemaning * (1000*3600))) / 60000)
  let secondsRemaning = Math.floor((msRemaning - ((daysRemaning*(1000*3600*24)) + (hoursRemaning*(1000*3600)) + (minutsRemaning*(60000)) )) / 1000)

  const secondsNode = ref(null)
  const minutsNode = ref(null)

  let secondsNumber = secondsRemaning
  let minutsNumber = minutsRemaning
  
  const checkSeconds = (secondsNumber , index) => {
    secondsNumber = secondsNumber - (index - 6)
    if(secondsNumber < 0) {
      secondsNumber = 60 + secondsNumber
    }
    return secondsNumber.toString().padStart(2, '0')
  }

  const checkMinuts = (minutsNumber , index) => {
    minutsNumber = minutsNumber - (index - 6)
    if(minutsNumber < 0) {
      minutsNumber = 60 + minutsNumber
    }
    return minutsNumber.toString().padStart(2, '0')
  }


  const isAnimated = ref(false)
  const isAnimatedMinuts = ref(false)
  
  function seconds(){

    setInterval(() => {
      isAnimated.value = true
    }, speed)

    secondsNode.value[0].addEventListener("animationend" , () => {
      console.log('animazione finita');
      isAnimated.value = false
      
      secondsNumber--

      if(secondsNumber == 0){
        secondsNumber = 59
        isAnimatedMinuts.value = true
      }


    })

    minutsNode.value[0].addEventListener("animationend" , () => {
      console.log('animazione minuti finita')
      isAnimatedMinuts.value = false
      minutsNumber--
    })

  }

  onMounted(() => seconds())


</script>