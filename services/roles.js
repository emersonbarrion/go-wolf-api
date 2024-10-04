const generateRoles = (count) => {
    const roles = []
    roles.push("seer")
    const wolf = Math.floor(+count / 4)
    for (let i = 0; i < wolf; i++) {
        roles.push("wolf")
    }

    const currentRoles = roles.length;
    for (let i = currentRoles; i < count; i++) {
        roles.push("villager")
    }

    return shuffleArray(roles);
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

module.exports = { generateRoles }