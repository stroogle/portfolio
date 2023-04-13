export const updateSection = (element: any, new_title: string) => {

    const existing_title = useSection()

    const {top} = useElementBounding(element)

    watch(top, () => {
        if(top.value > 0 && top.value < 70)
            existing_title.value = new_title
    })

}