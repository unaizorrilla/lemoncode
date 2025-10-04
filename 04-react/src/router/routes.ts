import { generatePath  } from "react-router-dom"

interface SwitchRoutes{
    List: string,
    Detail: string
}

interface Routes extends Omit<SwitchRoutes, 'Detail'>{
    Detail: (userId: number) => string
}

export const switchRoutes :  SwitchRoutes  = {
    List: '/organization',
    Detail: '/organization/detail/:userId'
}

export const routes : Routes  = {
    ...switchRoutes,
    Detail: (userId: number) => generatePath(switchRoutes.Detail, { userId })
}