import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDoubleRight, faCircleInfo, faEnvelope, faGear, faHouse, faPeopleGroup, faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(
    faUserSecret,
    faAngleDoubleRight,
    faHouse,
    faCircleInfo,
    faEnvelope,
    faPeopleGroup,
    faGear
    )

const icons = [ 'font-awesome-icon', FontAwesomeIcon ]

export default icons