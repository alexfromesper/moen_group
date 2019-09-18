export const propertyAvailability = (properties) => {
    const available = properties.find((property) => {
        return property.unit_availability === "Available"
    })

    if (available) {
        return true
    }

    return false
}

export const propertyPrice = (properties) => {
    const prices = properties.map((property) => property.unit_price)

    return Math.min(...prices)
}