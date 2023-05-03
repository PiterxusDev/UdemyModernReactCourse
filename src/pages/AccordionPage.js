import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: '0',
            label: 'Can i use React on a project?',
            content: 'Yes, we can use React! '
        },
        {
            id: '1',
            label: 'Can i use JavaScript on a project?',
            content: 'Yes, we can use JavaScript! '
        },
        {
            id: '2',
            label: 'Can i use CSS on a project?',
            content: 'Yes, we can use CSS! '
        }
    ]

    return <Accordion items={items} />
}

export default AccordionPage;