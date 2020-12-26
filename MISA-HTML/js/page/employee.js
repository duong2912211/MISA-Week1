$(document).ready(function () {
    loadData();
})

function loadData() {
    //Lay du lieu ve 
    $.ajax({
        url: "http://api.manhnv.net/api/employees",
        method: "GET",
    }).done(function (res) {
        var data = res;
        $.each(data, function (index, item) {
            var propertyName = "Birthday";
            item.propertyName
            var dateOfBirth = item["DateOfBirth"];
            dateOfBirth = formatData(dateOfBirth);
            var tr = $(`<tr>
                            <td><div><span>`+ item['EmployeeCode'] +`</span></div></td>
                            <td><div><span>`+ item['FullName'] +`</span></div></td>
                            <td><div><span>`+ item['GenderName'] + `</span></div></td>
                            <td><div><span>`+ dateOfBirth +`</span></div></td>
                            <td><div><span>`+ item['PhoneNumber'] +`</span></div></td>
                            <td><div><span>`+ item['Email'] +`</span></div></td>
                            <td><div><span>`+ item['PositionName'] +`</span></div></td>
                            <td><div><span>`+ item['DepartmentName'] +`</span></div></td>
                            <td><div><span>`+ item['Salary'] +`</span></div></td>
                            <td><div title="`+ item['Address']+`"><span>`+ item['Address'] +`</span></div></td>
                            <td><div><span>`+ item['WorkStatusName'] +`</span></div></td>       
                        </tr>`);
            $('table tbody').append(tr);
        })

    }).fail(function (res) {

    })
    //binding du lieu len table
}


function formatData(date) {
    var date = new Date(date);
    if (Number.isNaN(date.getTime())) {
        return "";
    }
    else {
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();

        return day + '/' + month + '/' + year;
    }
}