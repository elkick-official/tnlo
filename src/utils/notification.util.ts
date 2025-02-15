import { notification } from "antd";

export const successNotification = (
    message: string,
    duration?: number,
    placement?: any,
    btn?: any
) => {
    notification.success({
        message: message,
        duration: duration ? duration : 3,
        placement: placement ? placement : "topRight",
        btn,
    });
};

export const errorNotification = (
    message: any,
    duration?: number,
    placement?: any,
    btn?: any
) => {
    notification.error({
        message: message,
        duration: duration ? duration : 3,
        placement: placement ? placement : "topRight",
        btn,
    });
};

export const infoNotification = (
    message: any,
    duration?: number,
    placement?: any
) => {
    notification.info({
        message: message,
        duration: duration ? duration : 3,
        placement: placement ? placement : "topRight",
    });
};