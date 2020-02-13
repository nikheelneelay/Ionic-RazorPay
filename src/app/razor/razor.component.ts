import { Component, OnInit } from '@angular/core';

declare var RazorpayCheckout: any;

@Component({
  selector: 'app-razor',
  templateUrl: './razor.component.html',
  styleUrls: ['./razor.component.scss'],
})
export class RazorComponent implements OnInit {

  razor_key = 'rzp_test_wH84Xo2S2l6iBp';
  paymentAmount: number = 100;

  constructor() { }

  ngOnInit() { }

  payWithRazor() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR', // your 3 letter currency code
      key: this.razor_key, // your Key Id from Razorpay dashboard
      amount: this.paymentAmount, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'foo',
      prefill: {
        email: 'test@test.com',
        contact: '123456789',
        name: 'Test'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

}
