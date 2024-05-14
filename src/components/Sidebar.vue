<template>
    <nav class="sidebar">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="@/assets/img/full-time-ecanhoto-logo-2.png" alt="logo">
                </span>
            </div>

            <i class="bx bx-chevron-right toggle"></i>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <li class="nav-link">
                    <RouterLink to="/home">
                        <i class="bx bxs-home icon"></i>
                        <span class="text nav-text">Dashboard</span>
                    </RouterLink>
                </li>

                <li class="nav-link">

                    <RouterLink to="/canhotos">
                        <i class="bx bxs-spreadsheet icon"></i>
                        <span class="text nav-text">Canhotos</span>
                    </RouterLink>
                </li>

                <li class="nav-link">
                    <RouterLink to="/colaboradores">
                        <i class="bx bxs-user icon"></i>
                        <span class="text nav-text">Colaboradores</span>
                    </RouterLink>
                </li>
            </div>

            <div class="bottom-content mb-5">
                <li class="active">
                    <RouterLink to="/direcionamento" class="text nav-text text-white">
                        <i class="bx bx-log-out icon text-white"></i>
                        <span>Logout</span>
                    </RouterLink>
                </li>
            </div>
        </div>
    </nav>
</template>

<script setup>
</script>