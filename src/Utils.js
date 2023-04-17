export function formatDateTimeResponse(dateString) {
    // for instance: 2023-04-15T08:40:23.407837Z
    const date = new Date(dateString);
    const yyyy = date.getFullYear();
    let MM = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    let hh = date.getHours();
    let mm = date.getMinutes();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;


    const formattedDate = hh + ':' + mm + ' Ngày ' +  dd + '/' + MM + '/' + yyyy;
    return formattedDate;
}