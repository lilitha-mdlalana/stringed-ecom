<template>
    <Head>
        <Title>Stringed</Title>
        <Meta name="description"
            content="An e-commerce website built for the sole purpose of selling stringed instruments like guitars and accessories."/>
        <Meta name="keywords" content="e-commerce, guitar,stringed instruments"/>
        <Meta name="robots" content="index, follow"/>
        <Meta name="language" content="English"/>
    </Head>
    <div class="md:grid md:grid-cols-2 md:grid-rows-2">
        <ItemCard imagePath="/acoustic_guitar_cover.png" route="/acoustic-guitars" />
        <ItemCard imagePath="/electric_guitar_cover.png" route="electric-guitars" />
        <ItemCard imagePath="/bass_guitar_cover.png" route="/bass-guitars" />
        <ItemCard imagePath="/guitar_accessories_cover.png" route="/guitar-accessories" />
    </div>
</template>