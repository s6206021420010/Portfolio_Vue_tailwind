<template>
  <div class="bg-gray-100 min-h-screen flex justify-center py-0 px-4 relative">
      <div class="bg-white shadow-md rounded-lg w-full max-w-4xl p-6">
          <!-- Header -->
          <header class="flex flex-col md:flex-row items-center border-b pb-4 mb-6 relative">
              <img src="../assets/my_img.jpg" alt="Profile Picture" class="rounded-full w-24 h-25 object-cover mr-0 md:mr-6 mb-4 md:mb-0" />
              <div class="text-center md:text-left">
                  <h1 class="text-2xl font-bold text-gray-800">TARATEP KERDBOON</h1>
                  <p class="text-gray-500">Software Developer</p>
                  <p class="text-gray-500">taratep.dev1997@gmail.com | 092-7604466</p>
              </div>
              <Contract class="w-full  " />
          </header>
  
          <!-- Content -->
          <div>
              <!-- Section: Summary -->
              <section class="mb-6">
                  <h2 class="text-xl font-semibold text-gray-800 border-b pb-2">Profile</h2>
                  <p class="text-gray-600 mt-2">
                      I’m a Software Developer with strong problem-solving skills, and I’m passionate about creating beautiful and user-friendly websites. I excel at developing efficient solutions that meet the requirements effectively.
                  </p>
              </section>
  
              <!-- Section: Skills -->
              <section class="mb-6">
                  <h2 class="text-xl font-semibold text-gray-800 border-b pb-2">Skills</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                      <div>
                          <span class="text-gray-900 font-semibold">Web Technologies</span>
                          <ul>
                              <li class="text-gray-600 pl-2">PHP</li>
                              <li class="text-gray-600 pl-2">JavaScript ES6</li>
                              <li class="text-gray-600 pl-2">HTML & CSS</li>
                          </ul>
                      </div>
                      <div>
                          <span class="text-gray-900 font-semibold">JavaScript Library</span>
                          <ul>
                              <li class="text-gray-600 pl-2">jQuery</li>
                              <li class="text-gray-600 pl-2">Ant Design</li>
                              <li class="text-gray-600 pl-2">VueJS</li>
                              <li class="text-gray-600 pl-2">ReactJS</li>
                              <li class="text-gray-600 pl-2">React Native</li>
                          </ul>
                      </div>
                      <div>
                          <span class="text-gray-900 font-semibold">Frameworks</span>
                          <ul>
                              <li class="text-gray-600 pl-2">BootStrap</li>
                              <li class="text-gray-600 pl-2">Tailwind</li>
                          </ul>
                      </div>
                      <div>
                          <span class="text-gray-900 font-semibold">Other Tools</span>
                          <ul>
                              <li class="text-gray-600 pl-2">Version Control (Git), Remote Desktop</li>
                              <li class="text-gray-600 pl-2">Terminus</li>
                              <li class="text-gray-600 pl-2">MySQL</li>
                          </ul>
                      </div>
                  </div>
              </section>
  
              <!-- Section: Experience -->
              <section class="mb-6">
                  <h2 class="text-xl font-semibold text-gray-800 border-b pb-2">Education</h2>
                  <div class="mt-2">
                      <div class="mb-4">
                          <h3 class="font-semibold text-gray-700">KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</h3>
                          <p class="text-gray-500 text-sm">Jun 2019 - Jun 2022</p>
                          <ul>
                              <li class="text-gray-600 pl-2">Information Technology</li>
                              <li class="text-gray-600 pl-2">GPA: 2.56</li>
                          </ul>
                      </div>
                  </div>
              </section>
  
              <!-- Section: Career -->
              <section>
                  <h2 class="text-xl font-semibold text-gray-800 border-b pb-2">CAREER</h2>
                  <div class="space-y-6">
                      <div>
                          <h3 class="font-semibold text-gray-700">Web Developer | L&E Manufacturing CO.,LTD</h3>
                          <p class="text-gray-500 text-sm">Sep 2022 - Jun 2023</p>
                          <ul>
                              <li class="text-gray-600 pl-2">Collaborate in the development of Enterprise Resource Planning (ERP) systems.</li>
                              <li class="text-gray-600 pl-2">Participate in the development of payroll calculation systems.</li>
                              <li class="text-gray-600 pl-2">Take responsibility for developing employee fingerprint scanning systems.</li>
                              <li class="text-gray-600 pl-2">Provide support and troubleshoot various issues for employees and users within the company.</li>
                          </ul>
                      </div>
                      <div>
                          <h3 class="font-semibold text-gray-700">Front-end Developer | Censoft Enterprise Software Co.,Ltd.</h3>
                          <p class="text-gray-500 text-sm">Jun 2023 - Present</p>
                          <ul>
                              <li class="text-gray-600 pl-2">Rajavej Hospital Bangkok: Developed front-end systems for Rajavej Hospital using HTML, Bootstrap, and VueJS.</li>
                              <li class="text-gray-600 pl-2">National Cancer Institute: Designed front-end systems for the National Cancer Institute using HTML, Bootstrap, and VueJS.</li>
                              <li class="text-gray-600 pl-2">Political Party: Developed front-end systems and contributed to back-end development using Python and PHP.</li>
                          </ul>
                      </div>
                  </div>
              </section>
          </div>
      </div>
  </div>
  </template>
  

<script>
import Contract from "../components/contract.vue";
export default {
    components: {
        Contract,
    },
};
</script>

<style scoped>
</style>
