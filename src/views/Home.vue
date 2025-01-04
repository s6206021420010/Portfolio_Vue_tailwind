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
                <button id="print" @click="printPreview" type="button" class="mt-2 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                    <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z" />
                        <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z" />
                    </svg>
                    Print
                </button>
            </div>

            <!-- <Contract class="w-full  " /> -->
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
                            <li @click="$router.push('/php')" class="text-blue-600 pl-2 cursor-pointer hover:underline ">PHP</li>
                            <li @click="$router.push('/js')" class="text-gray-600 pl-2">JavaScript ES6</li>
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
        <div id="contract" class="mt-4 border-t pt-4">
            <h2 class="text-xl font-semibold text-gray-800 pb-2">CONTACT</h2>
            <button @click="toFadePage('facebook')" type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                </svg>
                Facebook
            </button>
            <button @click="toFadePage('github')" type="button" class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                </svg>
                Github
            </button>
            <button @click="toFadePage('linkedin')" type="button" class="text-white bg-[#0077b5] hover:bg-[#0077b5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077b5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#0077b5]/30 me-2 mb-2">
                <img src="../assets/linkedin.png" class="w-7 h-5 pe-2" alt="">
                Linkedin
            </button>
        </div>
    </div>
</div>
</template>

<script>
import Contract from "../components/contract.vue";
export default {
    data() {
        return {
            location: {
                github: "https://github.com/s6206021420010",
                facebook: "https://web.facebook.com/tephuskar",
                linkedin: "https://www.linkedin.com/in/taratep-kerdboon-a0b46826b/",
            }
        }
    },
    components: {
        Contract,
    },
    methods: {
        toFadePage(loc) {
            let location = "";
            switch (loc) {
                case "github":
                    location = this.location.github;
                    break;
                case "facebook":
                    location = this.location.facebook;
                    break;
                case "linkedin":
                    location = this.location.linkedin;
                    break;
            }
            window.open(location, '_blank');
        },
        printPreview() {
            window.print();
        }
    },
};
</script>

<style scoped>
@media print {

    #contract,
    #print {
        display: none;
    }
}
</style>
