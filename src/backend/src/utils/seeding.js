const { createProductSeed } = require("../controllers/productController");
const { createVideoSeed } = require("../controllers/videoController");
const { connectDB, disconnectDB } = require("./database")

async function seed() {
    await connectDB();
    console.log("Connected to the database, seeding now...")

    // Add Products to database
    await createProductSeed(
        "Rainbow Flower Kit",
        109.95,
        "A beautiful kit for creating flowers. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike",
        "/rainbow-flower.png",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    await createProductSeed(
        "Festive Season Kit",
        99.95,
        "A stunning kit to create designs for the festive season. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike",
        "/festive-season.png",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    await createProductSeed(
        "Mermaid Shimma Kit",
        109.95,
        "A great kit for creating mermaid designs. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike",
        "/mermaid-shimma.png",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    await createProductSeed(
        "Flaming Tiger Kit",
        79.95,
        "A wonderful kit for creating tiger designs. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike",
        "/flaming-tiger.png",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    await createProductSeed(
        "Princess Beauty Kit",
        99.95,
        "A beautiful kit for creating princess designs. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike",
        "/princess-beauty.png",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    await createProductSeed(
        "Rainbow Bliss Kit",
        109.95,
        "A stunning kit to create rainbow designs. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike. Shop high-quality, and expertly crafted Face Paint Kits, that provide you with everything you need to create stunning face paint designs - for beginners and professionals alike",
        "/rainbow-bliss.png",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    console.log("Products Added!")

    // Add Videos to database
    await createVideoSeed(
        "Rainbow Flower Kit",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    await createVideoSeed(
        "Festive Season Kit",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    await createVideoSeed(
        "Mermaid Shimma Kit",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    await createVideoSeed(
        "Flaming Tiger Kit",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    await createVideoSeed(
        "Princess Beauty Kit",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    await createVideoSeed(
        "Rainbow Bliss Kit",
        "https://www.youtube.com/watch?v=FzuSaFUlWlY"
    );

    console.log("Videos Added!")
    console.log("Seeding complete. Disconnecting from database...");
    
    await disconnectDB();
    console.log("Disconnected!");
}

// Connect, seed, then disconnect from database.
seed();