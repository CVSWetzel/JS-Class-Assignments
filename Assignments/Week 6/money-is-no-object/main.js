function isAdmin(user) {
    return user.userRole === 'ADMIN';
}
function getEmail(user) {
    const email = user.firstName.charAt(0).toLowerCase() + user.lastName.toLowerCase() + '.prsvr@gmail.com';
    return email;
}
function getPlaylistLength(playlist) {
    return playlist.songs.length;
}
function getHardestHomework(homeworks) {
    if (homeworks.length === 0) return '';

    let hardest = homeworks[0];
    for (let i = 1; i < homeworks.length; i++) {
        if (homeworks[i].averageScore < hardest.averageScore) {
            hardest = homeworks[i];
        }
    }
    return hardest.name;
}
function createPhonebook(names, numbers) {
    const phonebook = {};
    for (let i = 0; i < names.length; i++) {
        phonebook[names[i]] = numbers[i];
    }
    return phonebook;
}





// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};