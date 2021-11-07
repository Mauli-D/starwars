export const GetInitials = (text) => {
    if (text === null || text === undefined || text === "") {
        return ""
    }

    var initials = text.split(/\s/).reduce((response, word) => response += word.slice(0, 1), "")
        .toUpperCase()
    return initials.charAt(0) + initials.slice(-1);

}