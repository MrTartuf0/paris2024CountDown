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

    <div>
      <div v-for="n in 6">
        14
      </div>
    </div>

    <div class="flex flex-col-reverse ">
      <div v-for="(number, index) in 7" class="w-full flex justify-evenly relative top-[-11.5rem]" ref="collection" :class="{ turnDownClass: isAnimated }">
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
  let targetDate = new Date('05/05/2023') 
  let currentDate = new Date()
  let msRemaning = targetDate - currentDate
  let daysRemaning = Math.floor(msRemaning/(1000 * 3600 * 24)) 
  let hoursRemaning =  Math.floor((msRemaning - daysRemaning * (1000 * 3600 * 24)) / (1000*3600))
  let minutsRemaning = Math.floor((msRemaning - ((daysRemaning * (1000 * 3600 * 24)) + hoursRemaning * (1000*3600))) / 60000)
  let secondsRemaning = Math.floor((msRemaning - ((daysRemaning*(1000*3600*24)) + (hoursRemaning*(1000*3600)) + (minutsRemaning*(60000)) )) / 1000)

  const collection = ref(null)

  let secondsNumber = secondsRemaning
  
  const checkSeconds = (secondsNumber , index) => {
    secondsNumber -= index
    return secondsNumber.toString().padStart(2, '0')
  }


  const isAnimated = ref(false)
  
  function seconds(){

    setInterval(() => {
      isAnimated.value = true
    }, 1000)

    collection.value[0].addEventListener("animationend" , () => {
      console.log('animazione finita');
      isAnimated.value = false
      
      secondsNumber--

      if(secondsNumber == 0){
        secondsNumber = 60
      }

      for(let i=0 ; i<collection.value.length ; i++){
        collection.value[i]
      }

    })
  }

  onMounted(() => seconds())


</script>