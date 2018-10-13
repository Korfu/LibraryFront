$(function(){
     // Call the api and create table in the success method
     $.ajax({
        url: 'https://localhost:44324/api/customers',
        type: 'get',
            success:function(data){
                var customersList = data;
                console.log(customersList);
                createTableRows(customersList);
            },
            error: function(err){
                console.log(err);
            }
        })

        function createTableRows(customersList){
            var i =0;
            customersList.forEach(customer => 
                 {
                 addSingleRow(customersList[i]);
                 i++;
                });
         }

         function addSingleRow(customer){
            var rowElement = $(document.createElement('tr'))
            rowElement.append('<td>'+ customer.id +'</td>');
            rowElement.append('<td>'+ customer.name +'</td>');
            rowElement.append('<td>'+ customer.surname +'</td>');
            $('#customersTable tbody').append(rowElement);

        }
 });