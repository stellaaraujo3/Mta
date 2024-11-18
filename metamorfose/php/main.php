
<?php

$usuarios = [
    "admin" => "12345",
    "usuario" => "senha123"
];


$data = json_decode(file_get_contents('php://input'), true);
$username = $data['username'];
$password = $data['password'];


$response = ['success' => false, 'message' => 'Usuário ou senha incorretos.'];


if (isset($usuarios[$username]) && $usuarios[$username] === $password) {
    $response = ['success' => true, 'message' => "Bem-vindo, $username!"];
}


header('Content-Type: application/json');
echo json_encode($response);
?