if ($_SERVER["REQUEST_METHOD"] == "POST") {
$no=intval($_POST['no']);

function isPrime($num) {
if ($num <= 1) return false; for ($i=2; $i <=sqrt($num); $i++) { if ($num % $i==0) return false; } return true; }
    echo "Prime numbers between $start and $end are: " ; for ($i=$start; $i <=$end; $i++) { if (isPrime($i)) {
    echo "$i " ; } } }