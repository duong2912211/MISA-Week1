$(document).ready(function () {
    loadData();
})
/**
 * Load dữ liệu
 * CreatedBy :mentor (24/12/2020)
 * */
function loadData() {
    //Lay du lieu ve 
    $.ajax({
        url: "http://api.manhnv.net/api/employees",
        method: "GET",
    }).done(function (res) {
        var data = res;
        $.each(data, function (index, item) {
            var dateOfBirth = item["DateOfBirth"];
            var salary = item["Salary"];
            salary = formatMoney(salary);
            dateOfBirth = formatData(dateOfBirth);
            var checkbox = `<input type="checkbox" />`;
            if (item.Gender > 0) {
                var checkbox = `<input type="checkbox" checked/>`
            }
            var tr = $(`<tr>
                            <td><div><span>`+ item['EmployeeCode'] +`</span></div></td>
                            <td><div><span>`+ item['FullName'] + `</span></div></td>
                            <td><div class="text-align-center">`+ checkbox     +`</div></td>
                            <td><div><span>`+ dateOfBirth +`</span></div></td>
                            <td><div><span>`+ item['PhoneNumber'] +`</span></div></td>
                            <td><div><span>`+ item['Email'] +`</span></div></td>
                            <td><div><span>`+ item['PositionName'] +`</span></div></td>
                            <td><div><span>`+ item['DepartmentName'] +`</span></div></td>
                            <td><div><span class="text-align-right">`+ salary +`</span></div></td>
                            <td><div title="`+ item['Address']+`"><span>`+ item['Address'] +`</span></div></td>
                            <td><div><span>`+ item['WorkStatusName'] +`</span></div></td>       
                        </tr>`);
            $('table tbody').append(tr);
        })

    }).fail(function (res) {

    })
    //binding du lieu len table
}

/** -------------------------------------------------
 * Formar dữ liệu ngày tháng sang ngày/tháng/năm
 * @param {any} date tham số có kiểu dữ liệu bất kì
 * CreatedBy : Duong (26/12/2020)
 */

function formatData(date) {
    var date = new Date(date);
    if (Number.isNaN(date.getTime())) {
        return "";
    }else {
        var day = date.getDate(),
            month = date.getMonth() + 1,
            year = date.getFullYear();
        day = day < 10 ? '0' + day : day;
        month = month < 10 ? '0' + month : month;
        return day + '/' + month + '/' + year;
    }
}
/** ---------------------------------------------
 * Format dữ liệu tiền tệ
 * @param {any} money tham số truyền vào tiền
 * CreatedBy :mentor (26/12/2020)
 */
function formatMoney(money) {
    if (money != null) {
        var num = money.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        return num;
    }
    else {
        return " ";
    }

}