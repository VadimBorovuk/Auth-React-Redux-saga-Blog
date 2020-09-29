export function fetchData() {
    return fetch('/users.json')
        .then(res => res.json())
}