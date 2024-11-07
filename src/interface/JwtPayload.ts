import jwt_decode from 'jwt-decode';

interface JwtPayload {
    role: string;  // Token’da yer alan role bilgisi
    // Ek olarak id, name gibi diğer bilgiler de tanımlanabilir
}

function getUserRoleFromToken(token: string): string | null {
    try {
        const decoded = jwt_decode<JwtPayload>(token); // Token çözümleniyor
        return decoded.role;  // Rol bilgisine erişiliyor
    } catch (error) {
        console.error("Token çözülemedi:", error);
        return null;
    }
}
