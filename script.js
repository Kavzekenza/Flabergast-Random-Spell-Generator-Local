const spells = {
    "1": [
        {"Name": "Giggling Ghosts", "Effect": "Causes spectral laughter that distracts foes."},
        {"Name": "Bouncy Beans", "Effect": "Summons magical beans that make everyone jump high."},
        {"Name": "Squeaky Clean", "Effect": "Cleans and polishes armor until it squeaks."},
        {"Name": "Noodle Limb", "Effect": "Makes the target's limbs floppy like noodles."},
        {"Name": "Bubble Blast", "Effect": "Blows a stream of unbreakable bubbles."},
        {"Name": "Ticklish Winds", "Effect": "Summons a breeze that causes uncontrollable tickling."},
        {"Name": "Butterfingers", "Effect": "Causes all items in the vicinity to become slippery."},
        {"Name": "Dancing Shoes", "Effect": "Shoes start dancing with or without the wearer."},
        {"Name": "Sticky Situation", "Effect": "Makes the ground sticky, slowing movement."},
        {"Name": "Colorful Mood", "Effect": "Changes the color of the target's outfit based on mood."},
        {"Name": "Echoing Yodel", "Effect": "A loud yodel echoes, confusing all who hear it."},
        {"Name": "Unending Sniffles", "Effect": "Gives the target a temporary case of the sniffles."},
        {"Name": "Feather Flood", "Effect": "Fills the area with feathers, causing sneezing and laughter."},
        {"Name": "Snappy Dresser", "Effect": "Instantly changes the target's outfit to something ridiculous."},
        {"Name": "Rubberized World", "Effect": "Makes everything in a small area bouncy."},
        {"Name": "Shadow Puppet", "Effect": "Turns shadows into playful creatures."},
        {"Name": "Melodic Belch", "Effect": "User belches a charming melody."},
        {"Name": "Frothy Mirth", "Effect": "Generates a foam that causes laughter when touched."},
        {"Name": "Silly String", "Effect": "Shoots streams of colorful, tangling string."},
        {"Name": "Chatty Critters", "Effect": "Animals nearby start making small talk."}
    ],
    "2": [
        {"Name": "Slippery Slope", "Effect": "Creates a slippery surface causing foes to slide uncontrollably."},
        {"Name": "Confetti Cannon", "Effect": "Fires a blast of confetti that briefly blinds and confuses enemies."},
        {"Name": "Laughing Lagoon", "Effect": "Turns water surfaces into laughing hazards that giggle on contact."},
        {"Name": "Hiccup Haze", "Effect": "Induces a fit of hiccups in all nearby enemies."},
        {"Name": "Funky Fungi", "Effect": "Summons dancing mushrooms that release spores causing dance fever."},
        {"Name": "Whistling Winds", "Effect": "Creates wind that whistles tunes, distracting foes."},
        {"Name": "Jelly Jumps", "Effect": "Makes the ground temporarily bouncy like jelly."},
        {"Name": "Sparkle Spray", "Effect": "Emits a spray of sparkles that stick to everything, illuminating targets."},
        {"Name": "Odorous Orbs", "Effect": "Summons floating orbs that release pungent smells."},
        {"Name": "Misty Twist", "Effect": "Encases an area in mist that twists perception and direction."},
        {"Name": "Pillow Plump", "Effect": "Turns rocks and hard surfaces into soft pillows when touched."},
        {"Name": "Ribbon Wraps", "Effect": "Magical ribbons wrap around foes, gently binding them."},
        {"Name": "Soap Bubbles", "Effect": "Generates bubbles filled with slippery soap, causing falls."},
        {"Name": "Topsy Turvy", "Effect": "Inverts the vision of all affected, flipping everything upside down."},
        {"Name": "Gusts of Giggles", "Effect": "Generates gusts of wind that carry infectious laughter."},
        {"Name": "Candy Clouds", "Effect": "Clouds rain down sticky candy, causing foes to stick in place."},
        {"Name": "Zesty Zap", "Effect": "Electrifies the air with a zesty smell, energizing allies and startling foes."},
        {"Name": "Cartoon Capers", "Effect": "Makes the environment cartoonish, altering physics humorously."},
        {"Name": "Squishy Steps", "Effect": "Turns the floor into a squishy, difficult-to-navigate surface."},
        {"Name": "Night Light", "Effect": "Creates a soft, glowing light that follows the caster, revealing hidden objects but not alerting foes."}
    ],
    "3": [
        {"Name": "Pancake Parade", "Effect": "Turns nearby objects into pancakes."},
        {"Name": "Giggly Jig", "Effect": "Forces targets to dance uncontrollably."},
        {"Name": "Snore Symphony", "Effect": "Puts enemies to sleep with a lullaby of snores."},
        {"Name": "Marmalade Mischief", "Effect": "Covers the ground with sticky marmalade."},
        {"Name": "Echoing Quack", "Effect": "Ducks appear and quack loudly, causing confusion."},
        {"Name": "Marshmallow Mist", "Effect": "Summons a cloud of marshmallows that soften falls."},
        {"Name": "Bewitched Broom", "Effect": "Summons a flying broom that misbehaves."},
        {"Name": "Frog Chorus", "Effect": "Summons frogs that sing, distracting enemies."},
        {"Name": "Glitter Gust", "Effect": "Blasts enemies with a gust of blinding glitter."},
        {"Name": "Peppermint Wind", "Effect": "Sweeps through the area with a chilling peppermint breeze."},
        {"Name": "Wobble Jelly", "Effect": "Turns the surface under foes' feet into wobbling jelly."},
        {"Name": "Rabbit Outburst", "Effect": "Summons a horde of rabbits that hop everywhere."},
        {"Name": "Sneezing Fit", "Effect": "Induces a powerful sneezing fit in targets."},
        {"Name": "Bubble Beard", "Effect": "Grows a large, bubble-filled beard on the target's face."},
        {"Name": "Topsy-Turvy Tickle", "Effect": "Causes intense tickling, flipping targets upside down."},
        {"Name": "Teapot Tempest", "Effect": "Transforms objects into teapots that steam and whistle."},
        {"Name": "Cheese Chase", "Effect": "Turns small objects into cheese that mice chase."},
        {"Name": "Quill Quarrel", "Effect": "Feathers turn into quills that write insulting messages."},
        {"Name": "Laughing Lanterns", "Effect": "Lanterns laugh loudly when lit."},
        {"Name": "Mood Marble", "Effect": "Changes the color and mood of the room depending on the holder’s feelings."}
    ],
    "4": [
        {"Name": "Pudding Plunge", "Effect": "Fills boots with pudding, impeding movement."},
        {"Name": "Slippery Serenade", "Effect": "Causes everyone in earshot to slide around as if on ice."},
        {"Name": "Confetti Cascade", "Effect": "A cascade of confetti falls, obscuring vision and sticking to everything."},
        {"Name": "Mustache Madness", "Effect": "Grows an enormous mustache on the target’s face."},
        {"Name": "Orbital Oranges", "Effect": "Oranges orbit the caster, providing a fruity shield."},
        {"Name": "Squirrel Squabble", "Effect": "Summons squirrels that argue loudly, distracting everyone."},
        {"Name": "Rainbow Ruse", "Effect": "Creates a vivid rainbow that lures creatures to follow it."},
        {"Name": "Soap Opera", "Effect": "Targets caught in the spell begin to act out dramatic soap opera scenes."},
        {"Name": "Velvet Vortex", "Effect": "Creates a swirling vortex of soft velvet."},
        {"Name": "Oily Odyssey", "Effect": "Covers the ground in a slick oil, causing elaborate slips."},
        {"Name": "Tickle Tentacles", "Effect": "Summons tentacles that tickle anyone they touch."},
        {"Name": "Hopping Hex", "Effect": "Makes the target hop on one foot compulsively."},
        {"Name": "Porridge Pour", "Effect": "A downpour of warm porridge slows and nourishes."},
        {"Name": "Chameleon Chaos", "Effect": "Causes the target's skin to change colors randomly."},
        {"Name": "Beard Bind", "Effect": "Magical beards entangle around the target’s limbs."},
        {"Name": "Doodle Daze", "Effect": "Turns serious thoughts into doodles that appear in the air."},
        {"Name": "Echo Euphoria", "Effect": "Echoes cause extreme happiness and distraction."},
        {"Name": "Noodle Nudge", "Effect": "Giant noodles push targets gently in random directions."},
        {"Name": "Jellyfish Jaunt", "Effect": "Summons harmless jellyfish that float through the air."},
        {"Name": "Spectral Spaghetti", "Effect": "Spaghetti appears and wraps around anything it touches."}
    ],
    "5": [
        {"Name": "Feather Fiesta", "Effect": "Feathers explode from the target, tickling everyone nearby."},
        {"Name": "Grape Glue", "Effect": "Sticky grapes fall from above, sticking foes to the ground."},
        {"Name": "Book Bounce", "Effect": "Books bounce around, hitting targets with soft thumps."},
        {"Name": "Limerick Lift", "Effect": "Targets levitate while reciting limericks."},
        {"Name": "Disco Delight", "Effect": "A disco ball appears and everyone starts dancing."},
        {"Name": "Bubble Bop", "Effect": "Giant bubbles trap targets, who must pop them to escape."},
        {"Name": "Windy Wiggles", "Effect": "Wind makes everyone wiggle wildly."},
        {"Name": "Mustard Mist", "Effect": "A mist of mustard makes it hard to see and smells strongly."},
        {"Name": "Polka Dot Pandemonium", "Effect": "Everything turns polka-dotted, causing confusion."},
        {"Name": "Zucchini Zoom", "Effect": "Zucchinis zoom around the area, tripping up foes."},
        {"Name": "Velcro Vines", "Effect": "Vines act like velcro, sticking everyone together."},
        {"Name": "Strobe Storm", "Effect": "Flashing lights disorient and dazzle all within sight."},
        {"Name": "Cucumber Chorus", "Effect": "Cucumbers sing soothing tunes, calming the area."},
        {"Name": "Taffy Tangle", "Effect": "Sticky taffy covers the ground, tangling up feet."},
        {"Name": "Pepper Pirouette", "Effect": "Targets spin uncontrollably, sneezing from pepper."},
        {"Name": "Soda Spritz", "Effect": "Sprays sticky soda in a wide arc."},
        {"Name": "Wooly Whirl", "Effect": "Whirling wool wraps around targets snugly."},
        {"Name": "Lollipop Loop", "Effect": "Giant lollipops loop through the air, can be ridden."},
        {"Name": "Mosaic Mirage", "Effect": "Creates mirages that look like beautiful mosaics."},
        {"Name": "Gumball Gallop", "Effect": "Gumballs gallop around, causing merry mayhem."}
    ],
    "6": [
        {"Name": "Tartan Twirl", "Effect": "Everything touched turns tartan, tangling targets."},
        {"Name": "Licorice Lasso", "Effect": "Summons a lasso made of licorice to entrap foes."},
        {"Name": "Crochet Craze", "Effect": "Magical crochet hooks decorate everything cozily."},
        {"Name": "Dandelion Drift", "Effect": "Dandelions float around, making it hard to see."},
        {"Name": "Eggplant Eruption", "Effect": "Eggplants erupt from the ground, blocking paths."},
        {"Name": "Fondue Fountain", "Effect": "A fountain of cheese fondue appears, attracting wildlife."},
        {"Name": "Glitter Gale", "Effect": "A gale of glitter obscures vision and sticks to everything."},
        {"Name": "Hula Hoop Havoc", "Effect": "Magical hula hoops hoop around hips hilariously."},
        {"Name": "Jazz Hands", "Effect": "Causes everyone’s hands to jazz hand on their own."},
        {"Name": "Kaleidoscope Kaper", "Effect": "View turns into a shifting kaleidoscope pattern."},
        {"Name": "Lavender Lull", "Effect": "A soothing lavender smell lulls enemies to sleep."},
        {"Name": "Marshmallow March", "Effect": "Marshmallows march and chant cheerfully."},
        {"Name": "Nutcracker Note", "Effect": "Musical notes crack nuts open, causing a racket."},
        {"Name": "Origami Ordeal", "Effect": "Paper folds into origami figures that flutter around."},
        {"Name": "Pancake Pileup", "Effect": "Stacks of pancakes appear, toppling onto targets."},
        {"Name": "Quilt Quandary", "Effect": "Quilts cover the ground, making it soft and squishy."},
        {"Name": "Ribbon Reel", "Effect": "Ribbons reel out, wrapping around anything they touch."}
    ],
    "7": [
        {"Name": "Macaroni Monsoon", "Effect": "Summons a heavy downpour of macaroni, covering the ground."},
        {"Name": "Waffle Whirlwind", "Effect": "Spins a gust of wind that tosses waffles into the air."},
        {"Name": "Bubblegum Blizzard", "Effect": "A blizzard of sticky bubblegum balls slows movement and vision."},
        {"Name": "Marshmallow Maelstrom", "Effect": "Whips up a storm of marshmallows that cushions falls and sticks to foes."},
        {"Name": "Velvet Vibration", "Effect": "Sends out a wave of velvet that makes surfaces unnaturally soft."},
        {"Name": "Peppermint Pulsar", "Effect": "Blasts a sharp, refreshing peppermint scent that revitalizes allies and startles foes."},
        {"Name": "Spaghetti Squall", "Effect": "Calls forth a squall that flings spaghetti wildly around."},
        {"Name": "Gingerbread Golem", "Effect": "Conjures a large golem made of gingerbread to assist in battle."},
        {"Name": "Cheddar Cyclone", "Effect": "Creates a cyclone that scatters cheddar cheese slices."},
        {"Name": "Banana Bonanza", "Effect": "Bananas rain from the sky, causing slippery chaos."},
        {"Name": "Feather Frenzy", "Effect": "Launches thousands of feathers into the air, causing sneezing and obscured vision."},
        {"Name": "Confetti Conundrum", "Effect": "Explodes a giant confetti bomb that confuses and dazzles enemies."},
        {"Name": "Mousse Mirage", "Effect": "Creates an illusory landscape made entirely of chocolate mousse."},
        {"Name": "Raspberry Ripple", "Effect": "Sends a rippling wave of raspberries that trips up foes."},
        {"Name": "Sundae Slide", "Effect": "Turns the ground into a slippery slide of ice cream sundae toppings."},
        {"Name": "Tinsel Torrent", "Effect": "Unleashes a torrent of tinsel that entangles enemies."},
        {"Name": "Whipped Cream Whirl", "Effect": "Whirls whipped cream around, temporarily blinding enemies."},
        {"Name": "Jellybean Jamboree", "Effect": "Summons a parade of jellybeans that hop and distract foes."},
        {"Name": "Cupcake Cascade", "Effect": "Causes cupcakes to cascade down from above, cushioning falls and blocking paths."},
        {"Name": "Pillow Puff", "Effect": "Giant pillows puff up around the area, providing cover and rest."}
    ],
    "8": [
        {"Name": "Licorice Labyrinth", "Effect": "Creates a labyrinth of licorice ropes that trap enemies."},
        {"Name": "Minty Maelstrom", "Effect": "Spins a maelstrom that freshens the air and disorients foes."},
        {"Name": "Caramel Comet", "Effect": "Calls down a comet made of caramel that sticks foes to the ground."},
        {"Name": "Donut Deluge", "Effect": "Summons a deluge of donuts that confuse and feed enemies."},
        {"Name": "Espresso Eruption", "Effect": "Blasts foes with a jet of boiling espresso, awakening friends and foes alike."},
        {"Name": "Fruitcake Fortress", "Effect": "Erects a fortress made of indestructible fruitcake."},
        {"Name": "Gumdrop Gust", "Effect": "A gust of wind carrying gumdrops pelts the area."},
        {"Name": "Honey Hurricane", "Effect": "A sticky hurricane of honey slows all movement within."},
        {"Name": "Icicle Impulse", "Effect": "Summons sharp icicles that act on their own to protect the caster."},
        {"Name": "Jelly Jolt", "Effect": "Electrifies a patch of ground with jelly that shocks foes."},
        {"Name": "Kiwi Kinesis", "Effect": "Grants the ability to move kiwis with the mind, bombarding foes."},
        {"Name": "Lemonade Lake", "Effect": "Transforms the terrain into a lake of lemonade that slows and refreshes."},
        {"Name": "Marshmallow Mountain", "Effect": "Creates a huge mountain of marshmallows that hampers vision and movement."},
        {"Name": "Nougat Nebula", "Effect": "Forms a nebula of nougat above, dropping sticky pieces on foes."},
        {"Name": "Oatmeal Outburst", "Effect": "An outburst that covers the area in sticky oatmeal."},
        {"Name": "Peanut Butter Plunge", "Effect": "Drowns an area in peanut butter, greatly hindering movement."},
        {"Name": "Quince Quake", "Effect": "Causes a minor earthquake, shaking loose quinces from above."},
        {"Name": "Root Beer Riptide", "Effect": "Unleashes a riptide of root beer that sweeps enemies away."},
        {"Name": "Strawberry Storm", "Effect": "A storm of strawberries bombards the area, causing sweet chaos."},
        {"Name": "Tapioca Tornado", "Effect": "Spins a tornado of tapioca pearls that trap and disorient foes."}
    ],
    "9": [
        {"Name": "Whimsical Warp", "Effect": "Teleports the target to a random party."},
        {"Name": "Gravity Guffaw", "Effect": "Inverts gravity for one minute, causing hilarity."},
        {"Name": "Time Tickles", "Effect": "Slows time, but only for laughs and giggles."},
        {"Name": "Serious Jelly", "Effect": "Turns the ground into wobbly jelly."},
        {"Name": "Mystery Mist", "Effect": "Creates a fog that whispers jokes."},
        {"Name": "Riddle Rain", "Effect": "Rain falls, each drop contains a riddle."},
        {"Name": "Orchestra Outburst", "Effect": "Spawns instruments that play by themselves."},
        {"Name": "Puddle Portal", "Effect": "Puddles act as portals to random watery locations."},
        {"Name": "Sudden Spotlight", "Effect": "A spotlight follows the target, narrating their actions."},
        {"Name": "Phantom Feast", "Effect": "Summons a ghostly banquet."},
        {"Name": "Banter Beam", "Effect": "Shoots a beam that makes targets spout banter."},
        {"Name": "Dreamy Drizzle", "Effect": "Rain makes everyone in the area daydream."},
        {"Name": "Fizzy Lifting", "Effect": "Causes the target to float gently, bubbling up."},
        {"Name": "Cosmic Comedy", "Effect": "The stars align to tell a cosmic joke."},
        {"Name": "Twisty Twirl", "Effect": "Causes all nearby to twirl uncontrollably."},
        {"Name": "Jester's Jaunt", "Effect": "Transports the target into a jester's hat."},
        {"Name": "Echoing Enigma", "Effect": "Echoes cryptic clues about nearby treasures."},
        {"Name": "Nostalgic Nudge", "Effect": "Causes a feeling of nostalgia in the target."},
        {"Name": "Invisible Ink", "Effect": "Turns all writings in the area invisible."},
        {"Name": "Goofy Gloom", "Effect": "Even shadows start acting silly."}
    ]
};

function generateSpell() {
    const level = document.getElementById("spellLevel").value;

    const spellList = spells[level];
    if (!spellList) {
        console.error("No spells found for level: " + level);
        return;
    }

    const randomIndex = Math.floor(Math.random() * spellList.length);
    const randomSpell = spellList[randomIndex];

    if (!randomSpell) {
        console.error("Failed to select a random spell from the list.");
        return;
    }

    document.getElementById("spellName").textContent = randomSpell.Name;
    document.getElementById("spellEffect").textContent = randomSpell.Effect;
    
    // Make the spell output visible
    const spellOutput = document.getElementById("spellOutput");
    spellOutput.classList.add("visible");
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', generateSpell);
    } else {
        console.error("Generate button not found.");
    }
});
