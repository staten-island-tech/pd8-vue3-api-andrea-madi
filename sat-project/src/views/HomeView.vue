<template>
  <div class="container">
      <header>NYC'S SAT score report</header>
      <img class='image' src="https://studyfans.com/storage/university/banner.png" alt="SAT IMAGE">
      <header>about the SAT</header>
      <p class="text">The SAT is an entrance exam used by most colleges and
        universities to make admissions decisions. The SAT is 
        a multiple-choice, pencil-and-paper test created and 
        administered by the College Board. The purpose of the SAT 
        is to measure a high school student's readiness for college, 
        and provide colleges with one common data point that can 
        be used to compare all applicants. College admissions 
        officers will review standardized test scores alongside 
        your high school GPA, the classes you took in high school, 
        letters of recommendation from teachers or mentors, 
        extracurricular activities, admissions interviews, and 
        personal essays. How important SAT scores are in the college 
        application process varies from school to school.
        Overall, the higher you score on the SAT and/or ACT, the 
        more options for attending and paying for college will be 
        available to you.</p>
        <h3>- The Princton Review</h3>
        <header>about the scores</header>
        <p class="text"> A good SAT score is one that helps you get admitted 
          to a college that you want to go to. In 2019, the average 
          SAT score was 1050. Any score above that would be above 
          average and perfectly acceptable for many colleges. A score 
          of 1350 would put you in the top 10% of test takers and help 
          make your application competitive at more selective schools.
          In choosing colleges to apply to, consider factors such as 
          the cost of tuition and availability of financial aid, location, 
          and campus atmosphere. Also consider whether the college 
          offers academic and extracurricular programs that interest you. 
          To set your target SAT score, first explore a range of colleges 
          that can offer you the mix of things you want. Then, look at 
          the average SAT score for an admitted freshman and use that 
          as your target. The College Board college planning website 
          BigFuture contains all of this information and is an excellent 
          resource for researching colleges. Note: Bear in mind that your 
          SAT score is only one factor among several on your application. 
          Your grades, application essay, and extracurriculars also shape 
          admissions officers’ perceptions of your application.
        </p>
        <h3>- College Board</h3>
        <header>and the creators...</header>
        <img class='pic' src="../IMG_1330.jpg" alt="whalen image">
        <h2>- madi & andrea</h2>
        <footer>
        </footer>
  </div>
  
</template>

<script>

</script>

<style>
*, body, html{
  text-align: center;
  font: 2rem;
  margin: 0;
  padding: 0;
}
.container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
header{
  padding: 1rem;
  font-size: 2rem;
}
.image{
  height: 70vh;
}
.pic{
  height: 70vh;
  border-radius: 15px;
  border: 10px rgb(14, 14, 88);
}
.text{
  font-size: 1.25rem;
  width: 80vw;
  font-family: 'Calistoga', cursive;
}
h3{
  margin-top: 0.5rem;
  margin-left: 50vw;
  font-size: 1.5rem;
  font-family: 'Calistoga', cursive;
}
h2{
  margin-top: 1rem;
  font-family: 'Calistoga', cursive;
}
footer{
  height: 50vh;
}
</style>