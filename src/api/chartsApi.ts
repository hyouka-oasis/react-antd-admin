export function getAreaChart(): Promise<Array<{ Date: string | number; scales: number | string }>> {
    return new Promise((resolver) => {
        const arrayList = [
            {
                Date: '2010-01',
                scales: 1998
            },
            {
                Date: '2010-02',
                scales: 1850
            },
            {
                Date: '2010-03',
                scales: 1851
            },
            {
                Date: '2010-04',
                scales: 1234
            },
            {
                Date: '2010-05',
                scales: 1560
            }
        ]
        resolver(arrayList)
    })
}
