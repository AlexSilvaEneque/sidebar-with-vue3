<script setup>
    import { ref } from "vue"

    const expanded = ref(localStorage.getItem('is_expanded') === "true")

    const ToggleMenu = () => {
        expanded.value = !expanded.value
        localStorage.setItem('is_expanded', expanded.value)
    }


</script>

<template>
    <aside :class="`${expanded && 'is-expanded'}`">
        <div class="logo">
            <img src="../assets/vue.svg" alt="logo">
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">
                    <font-awesome-icon icon="fa-solid fa-angles-right" />
                </span>                
            </button>
        </div>
        <h3 v-if="expanded">Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">
                    <font-awesome-icon icon="fa-solid fa-house" />
                </span>
                <span class="text" v-if="expanded">Home</span>
            </router-link>     
            <router-link class="button" to="/about">
                <span class="material-icons">
                    <font-awesome-icon icon="fa-solid fa-circle-info" />
                </span>
                <span class="text" v-if="expanded">About</span>
            </router-link>   
            <router-link class="button" to="/group">
                <span class="material-icons">
                    <font-awesome-icon icon="fa-solid fa-people-group" />
                </span>
                <span class="text" v-if="expanded">Team</span>
            </router-link>   
            <router-link class="button" to="/contact">
                <span class="material-icons">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                </span>
                <span class="text" v-if="expanded">Contact us</span>
            </router-link>   
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link class="button" to="/settings">
                <span class="material-icons">
                    <font-awesome-icon icon="fa-solid fa-gear" />                    
                </span>
                <span class="text" v-if="expanded">Settings</span>
            </router-link>
        </div>

    </aside>    
</template>

<style lang="scss" scoped>
    aside {
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px);
        min-height: 100vh;
        overflow: hidden;
        padding: 1rem;
        
        background-color: var(--primary);
        color: var(--light);
        transition: .2s ease-out;

        .flex {
            flex: 1 1 0%;
        }

        .logo {
            margin-bottom: 1rem;

            img {
                width: 2rem;
            }
        }

        .menu-toggle-wrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;

            position: relative;
            top: 0;
            transition: .2s ease-out;

            .menu-toggle {
                transition: .2s ease-out;

                .material-icons {
                    font-size: 2rem;
                    color: var(--light);
                    transition: .2s ease-out;
                }

                &:hover {
                    .material-icons {
                        color: var(--endcolor);
                    }
                }
            }
        }

        h3, .button, .text {
            opacity: 1;
            transition: .3s ease-out;
        }

        h3 {
            color: var(--rare);
            font-size: 1rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }

        .menu {
            margin: 0 -1rem;

            .button {
                display: flex;
                align-items: center;
                text-decoration: none;
                padding: .5rem 1rem;
                transition: .2s ease-out;

                .material-icons {
                    font-size: 2rem;
                    color: var(--light);                    
                    transition: .2s ease-out;
                }

                .text {
                    color: var(--light);
                    transition: .2s ease-out;
                }

                &:hover, &.router-link-exact-active {
                    background-color: var(--secondary);

                    .material-icons, .text {
                        color: var(--endcolor);
                    }
                }

                &.router-link-exact-active {
                    border-right: 5px solid var(--endcolor);
                }
            }
        }

        &.is-expanded {
            width: var(--sidebar-width);

            .menu-toggle-wrap {
                top: -3rem;

                .menu-toggle {
                    transform: rotate(180deg);
                }
            }

            h3, .button .text {
			    opacity: 1;
		    }

            .button {
                .material-icons {
                    margin-right: 1rem;
                }
            }
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 99;
        }
    }
</style>