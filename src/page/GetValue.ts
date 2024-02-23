export const getElementValue = (elementId: string): number => {
    const element = document.getElementById(elementId) as HTMLInputElement | null;
    return element ? parseFloat(element.value) : 0;
};

export const getElementStringValue = (elementId: string): string => {
    const element = document.getElementById(elementId) as HTMLInputElement | null;
    return element ? element.value : '';
};
