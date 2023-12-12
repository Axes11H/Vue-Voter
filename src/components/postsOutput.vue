<template>
    <div class="container">
        <div class="d-flex posts shadow rounded">
            <div class="dec-line"></div>
            <div class="p-2">
                <div>Best Vue projects for beginners!</div>
                <div class="fs-7">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</div>
                <span class="fs-9">Unknown author</span>
            </div>
        </div>
    </div>
</template>

<style>
    .dec-line{
        width: 5px;
        height: 100%;
        background-color: rgb(25,135,84);
        margin-right: 20px;
    }
    .posts{
        transition: .3s ease-in-out;
        cursor: pointer;
        margin-top: 50px;
        float: right;
        width: 79%;
        height: 150px;
        padding: 20px 40px;
    }
    .posts:hover{
        transform: scale(1.009);
    }
    .fs-7{
        font-size: 14px;
    }
    .fs-9{
        font-size: 12px;
    }
</style>