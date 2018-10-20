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
            rowElement.append('<td><button class = "btn btn-primary">DETAILS</button></td>');
            rowElement.append('<td><button class = "btn btn-warning">EDIT</button></td>');
            rowElement.append('<td><button class = "btn btn-danger">DELETE</button></td>');
            $('#customersTable tbody').append(rowElement);

        }

        $('.btn-primary').on('click', function() {




            $('#detailsId').text(customer.id);
            $('#detailsName').text(customer.name);
            $('#detailsSurame').text(customer.surname);
        })

 });