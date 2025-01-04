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
        </header>
        <div class="flex gap-2 flex-row items-center">
            <h2 class="text-xl font-semibold text-gray-800 pb-2">PHP Skill</h2>
            <img src="../assets/web.png" class="w-11 h-11 object-cover" />
        </div>
        <ul>
            <li class="text-gray-600 pl-2">- Worked on the front end using PHP with AJAX integration.</li>
            <li class="text-gray-600 pl-2">- Implemented iframe functionality in PHP to fetch and send data to Vue.js in a hybrid format.</li>
            <li class="text-gray-600 pl-2">- Developed a patient screening system for a hospital, which involved collecting patient data such as weight, height, blood pressure...</li>
            <li class="text-gray-600 pl-2">- Create system for the pharmacy department.</li>
            <li class="text-gray-600 pl-2">- Created a patient registration system using national ID cards, with the capability to store photos, addresses, and ID card information.</li>
        </ul>
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
