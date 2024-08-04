<script>
    import { Accordion, AccordionItem, Button } from 'flowbite-svelte';
</script>

<section class="bg-white dark:bg-gray-900 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl mb-12">
            Frequently Asked Questions
        </h2>

        <Accordion>
            <AccordionItem>
                <span slot="header">How does ModelTrace differ from traditional modeling tools?</span>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                    ModelTrace combines the power of AI with intuitive design tools to streamline the entire system modeling process. Unlike traditional tools, it offers real-time collaboration, smart suggestions, and seamless integration with requirement tracking.
                </p>
            </AccordionItem>
            <AccordionItem>
                <span slot="header">Can I import my existing models and requirements?</span>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Yes, ModelTrace supports importing from a wide range of formats, including UML, SysML, and various requirement management tools. Our AI assists in mapping and optimizing your existing data within our platform.
                </p>
            </AccordionItem>
            <AccordionItem>
                <span slot="header">Is ModelTrace suitable for large enterprise projects?</span>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                    Absolutely! ModelTrace is designed to scale with your needs. Our Enterprise plan offers advanced features like custom integrations, dedicated support, and enhanced security measures to meet the demands of large-scale projects.
                </p>
            </AccordionItem>
        </Accordion>
    </div>
</section>

<section class="bg-primary-600 dark:bg-primary-500 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to transform your system design process?
        </h2>
        <p class="mt-4 text-xl text-primary-100 max-w-2xl mx-auto">
            Join thousands of teams already using ModelTrace to streamline their workflows and deliver better systems, faster.
        </p>
        <div class="mt-8 flex justify-center">
            <Button size="xl">Start Your Free Trial</Button>
        </div>
    </div>
</section>