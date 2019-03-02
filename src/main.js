import {
    Results
} from "./triangle-tracker";
import './styles.css';

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function () {
    $("form#triangle").submit((event) => {

        event.preventDefault();

        $("form#triangle").hide();

        var items = Results();
        var upperCase = items.map((item) => {
            return ('<li>' + item.toUpperCase() + '</li>');
        });

        $("#itemList").html(upperCase.sort()).show();
    });
});