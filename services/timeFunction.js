function getHours(timestamp) {
    const now = Date.now()
    const date = new Date(timestamp)
    const diff = now - date

    if (diff / 1000 / 60 / 60 / 24 / 31 > 12) {
        return {
            type: 'yil',
            value: Math.round(diff / 1000 / 60 / 60 / 24 / 31 / 12),
        }
    } else if (diff / 1000 / 60 / 60 / 24 > 31) {
        return {
            type: 'oy',
            value: Math.round(diff / 1000 / 60 / 60 / 24 / 31),
        }
    } else if (diff / 1000 / 60 / 60 > 24) {
        return {
            type: 'kun',
            value: Math.round(diff / 1000 / 60 / 60 / 24),
        }
    } else if (diff / 1000 / 60 / 60 > 1) {
        return {
            type: 'soat',
            value: Math.round(diff / 1000 / 60 / 60 / 24),
        }
    } else {
        return {
            type: 'minut',
            value: Math.round(diff / 1000 / 60),
        }
    }
}
export default getHours