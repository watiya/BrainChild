const Path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let relativePath = "/";
let isProduction = false;

if (process.env.NODE_ENV === "production") {
    relativePath = "../../";
    isProduction = true;
    console.log("🤖 You are running PRODUCTION mode. 🤖");
} else {
    relativePath = "/";
    console.log("🤖 You are running DEVELOPMENT mode. 🤖");
}

module.exports = {
    entry: {
        app: Path.resolve(__dirname, "../src/scripts/index.js"),
    },
    output: {
        path: Path.join(__dirname, "../root"),
        filename: "static/js/[name].js",
        publicPath: relativePath,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            name: false,
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: Path.resolve(__dirname, "../src/static/fonts"),
                to: "static/fonts",
            },
            {
                from: Path.resolve(__dirname, "../src/static/icons"),
                to: "static/icons",
            },
            {
                from: Path.resolve(__dirname, "../src/static/images"),
                to: "static/images",
            },
            {
                from: Path.resolve(__dirname, "../src/static/plugins"),
                to: "static/plugins",
            },
        ]),

        // Components
        new HtmlWebpackPlugin({
            title: "Spera Style Guide | UI Element 01",
            components: true,
            filename: "pages/guide/element01.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/guide/element01.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
            isIndex: true,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Style Guide | UI Element 02",
            components: true,
            filename: "pages/guide/element02.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/guide/element02.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Style Guide | UI Element 03",
            components: true,
            filename: "pages/guide/element03.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/guide/element03.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Style Guide | UI Element Forms",
            components: true,
            filename: "pages/guide/forms.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/guide/forms.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // End of Components

        // Index Page
        new HtmlWebpackPlugin({
            title: "Spera Back Office",
            template: Path.resolve(__dirname, "../src/views/pages/index.hbs"),
            minify: false,
        }),

        // Login

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Login",
            filename: "pages/login/login.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/login/login.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Login",
            filename: "pages/login/loginerror.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/login/loginerror.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Login",
            filename: "pages/login/maintenance.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/login/maintenance.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Back Office
        new HtmlWebpackPlugin({
            title: "Spera Back Office | Account Management",
            backoffice: true,
            backoffice_account: true,
            filename: "pages/backoffice/account-management.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/account-management.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
            isIndex: true,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Account Management",
            backoffice: true,
            backoffice_account: true,
            filename: "pages/backoffice/account-registration.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/account-registration.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Account Management",
            backoffice: true,
            backoffice_account: true,
            filename: "pages/backoffice/account-editing.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/account-editing.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Level Management",
            backoffice: true,
            backoffice_level: true,
            filename: "pages/backoffice/level-management.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/level-management.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Level Management",
            backoffice: true,
            backoffice_level: true,
            filename: "pages/backoffice/level-registration.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/level-registration.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Level Management",
            backoffice: true,
            backoffice_level: true,
            filename: "pages/backoffice/level-editing.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/level-editing.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Company Management",
            backoffice: true,
            backoffice_company: true,
            filename: "pages/backoffice/company-management.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/company-management.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Company Management",
            backoffice: true,
            backoffice_company: true,
            filename: "pages/backoffice/company-registration.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/company-registration.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Company Management",
            backoffice: true,
            backoffice_company: true,
            filename: "pages/backoffice/company-editing.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/company-editing.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Game Management",
            backoffice: true,
            backoffice_game: true,
            filename: "pages/backoffice/game-management.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/game-management.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Game Management",
            backoffice: true,
            backoffice_game: true,
            filename: "pages/backoffice/game-registration.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/game-registration.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Game Management",
            backoffice: true,
            backoffice_game: true,
            filename: "pages/backoffice/game-editing.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/game-editing.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Category Management",
            backoffice: true,
            backoffice_category: true,
            filename: "pages/backoffice/category-management.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/category-management.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Category Management",
            backoffice: true,
            backoffice_category: true,
            filename: "pages/backoffice/category-registration.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/category-registration.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | Category Management",
            backoffice: true,
            backoffice_category: true,
            filename: "pages/backoffice/category-editing.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/category-editing.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Back Office | History",
            backoffice: true,
            backoffice_history: true,
            filename: "pages/backoffice/history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/backoffice/history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Account

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Account Management",
            accountportal: true,
            accountportal_menu1: true,
            accountportal_accountmanagement: true,
            filename: "pages/accountportal/account-management.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/account-management.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Account Management Transfer",
            accountportal: true,
            accountportal_menu1: true,
            accountportal_accountmanagementtransfer: true,
            filename: "pages/accountportal/account-management-transfer.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/account-management-transfer.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Account Deposit/Withdrawal History",
            accountportal: true,
            accountportal_menu1: true,
            accountportal_accountdeposithistory: true,
            filename: "pages/accountportal/account-dw-history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/account-dw-history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Account Transfer History",
            accountportal: true,
            accountportal_menu1: true,
            accountportal_accounttransferhistory: true,
            filename: "pages/accountportal/account-transfer-history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/account-transfer-history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Game Account Management for Portal",
            accountportal: true,
            accountportal_menu2: true,
            accountportal_gameaccountmanagement: true,
            filename: "pages/accountportal/game-account-management-portal.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/game-account-management-portal.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Game Account Management for Company",
            accountportal: true,
            accountportal_menu2: true,
            accountportal_gameaccountmanagement: true,
            filename:
                "pages/accountportal/game-account-management-company.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/game-account-management-company.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title:
                "Spera Account Portal | Game Account Deposit/Withdrawal History",
            accountportal: true,
            accountportal_menu2: true,
            accountportal_gameaccountdwhistory: true,
            filename: "pages/accountportal/game-account-dw-history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/game-account-dw-history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Game Account Transfer History",
            accountportal: true,
            accountportal_menu2: true,
            accountportal_gameaccounttransferhistory: true,
            filename: "pages/accountportal/game-account-transfer-history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/game-account-transfer-history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Game Account Management Transfer",
            accountportal: true,
            accountportal_menu2: true,
            accountportal_gameaccountmanagement: true,
            filename:
                "pages/accountportal/game-account-management-transfer.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/game-account-management-transfer.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Game Account Management Transfer",
            accountportal: true,
            accountportal_menu2: true,
            accountportal_gameaccountmanagement: true,
            filename:
                "pages/accountportal/game-account-operation-fund-setting.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/game-account-operation-fund-setting.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Portal Payment History",
            accountportal: true,
            accountportal_menu3: true,
            accountportal_portalpayment: true,
            filename: "pages/accountportal/portal-payment-history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/portal-payment-history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Portal General Payment",
            accountportal: true,
            accountportal_menu3: true,
            accountportal_portalgeneralpayment: true,
            filename: "pages/accountportal/portal-general-payment.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/portal-general-payment.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Portal Batch Payment",
            accountportal: true,
            accountportal_menu3: true,
            accountportal_portalbatchpayment: true,
            filename: "pages/accountportal/portal-batch-payment.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/portal-batch-payment.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Portal Retrieve",
            accountportal: true,
            accountportal_menu3: true,
            accountportal_portalretrieve: true,
            filename: "pages/accountportal/portal-retrieve.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/portal-retrieve.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Game Manager Payment History",
            accountportal: true,
            accountportal_menu4: true,
            accountportal_gamemanagerpaymenthistory: true,
            filename: "pages/accountportal/game-manager-payment-history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/game-manager-payment-history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Account Portal | Game Manager General Payment",
            accountportal: true,
            accountportal_menu4: true,
            accountportal_gamemanagergeneralpayment: true,
            filename: "pages/accountportal/game-manager-general-payment.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/accountportal/game-manager-general-payment.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Event

        new HtmlWebpackPlugin({
            title: "Spera Event | Weekly Race",
            event: true,
            event_weeklyrace: true,
            filename: "pages/event/weeklyrace.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/event/weeklyrace.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Event |  Lucky Pot",
            event: true,
            event_luckypot: true,
            filename: "pages/event/luckypot.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/event/luckypot.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Game

        new HtmlWebpackPlugin({
            title: "Spera Game | List",
            game: true,
            game_list: true,
            filename: "pages/game/game-list.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/game/game-list.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Game | Add",
            game: true,
            game_list: true,
            filename: "pages/game/game-add.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/game/game-add.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Game | Status List",
            game: true,
            game_check: true,
            game_check_status: true,
            filename: "pages/game/game-status-list.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/game/game-status-list.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Game | Maintenance Schedule",
            game: true,
            game_check: true,
            game_check_schedule: true,
            filename: "pages/game/game-maintenance-schedule.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/game/game-maintenance-schedule.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Game | Maintenance List",
            game: true,
            game_check: true,
            game_check_maintenance: true,
            filename: "pages/game/game-maintenance-list.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/game/game-maintenance-list.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Game | Launch List",
            game: true,
            game_launch: true,
            filename: "pages/game/game-launch-list.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/game/game-launch-list.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Game | Launch Setting",
            game: true,
            game_launch: true,
            filename: "pages/game/game-launch-setting.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/game/game-launch-setting.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Withdraw

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw Failures",
            withdraw: true,
            withdraw_failures: true,
            filename: "pages/withdraw/withdraw-failures.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-failures.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw Pending Reviews",
            withdraw: true,
            withdraw_review: true,
            filename: "pages/withdraw/withdraw-review.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-review.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw Pending Reviews",
            withdraw: true,
            withdraw_review: true,
            filename: "pages/withdraw/withdraw-review-view.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-review-view.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw Review History",
            withdraw: true,
            withdraw_review_history: true,
            filename: "pages/withdraw/withdraw-review-history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-review-history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw History",
            withdraw: true,
            withdraw_history: true,
            withdraw_history_pendinguser: true,
            filename: "pages/withdraw/withdraw-history-pending-user.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-history-pending-user.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw History",
            withdraw: true,
            withdraw_history: true,
            withdraw_history_pendingcompany: true,
            filename: "pages/withdraw/withdraw-history-pending-company.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-history-pending-company.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw History",
            withdraw: true,
            withdraw_history: true,
            withdraw_history_doneuser: true,
            filename: "pages/withdraw/withdraw-history-done-user.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-history-done-user.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw History",
            withdraw: true,
            withdraw_history: true,
            withdraw_history_donecompany: true,
            filename: "pages/withdraw/withdraw-history-done-company.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-history-done-company.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw Account Management",
            withdraw: true,
            withdraw_account_management: true,
            filename: "pages/withdraw/withdraw-account-management.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-account-management.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw Policy Management",
            withdraw: true,
            withdraw_policy: true,
            withdraw_policy_management: true,
            filename: "pages/withdraw/withdraw-policy-management.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-policy-management.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Withdraw | Withdraw Policy History",
            withdraw: true,
            withdraw_policy: true,
            withdraw_policy_history: true,
            filename: "pages/withdraw/withdraw-policy-history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/withdraw/withdraw-policy-history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        //Calculate
        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Portal Summary",
            calculate: true,
            calculate_portal_settlement: true,
            calculate_portal_summary: true,
            filename: "pages/calculate/calculate-portal-summary.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-portal-summary.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Portal Review",
            calculate: true,
            calculate_portal_settlement: true,
            calculate_portal_review: true,
            filename: "pages/calculate/calculate-portal-review.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-portal-review.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction
        }),

        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Portal Review",
            calculate: true,
            calculate_portal_settlement: true,
            calculate_portal_review: true,
            filename: "pages/calculate/calculate-portal-review-view.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-portal-review-view.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction
        }),


        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Portal Result",
            calculate: true,
            calculate_portal_settlement: true,
            calculate_portal_result: true,
            filename: "pages/calculate/calculate-portal-result.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-portal-result.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction
        }),


        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Portal Result",
            calculate: true,
            calculate_portal_settlement: true,
            calculate_portal_result: true,
            filename: "pages/calculate/calculate-portal-result-statement.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-portal-result-statement.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction
        }),

        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Company Summary",
            calculate: true,
            calculate_company: true,
            calculate_company_summary: true,
            filename: "pages/calculate/calculate-company-summary.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-company-summary.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction
        }),

        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Company Result Statement",
            calculate: true,
            calculate_company: true,
            calculate_company_result_statement: true,
            filename: "pages/calculate/calculate-company-result-statement.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-company-result-statement.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction
        }),

        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Company Result",
            calculate: true,
            calculate_company: true,
            calculate_company_result: true,
            filename: "pages/calculate/calculate-company-result.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-company-result.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction
        }),

        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Company Result Statement",
            calculate: true,
            calculate_company: true,
            calculate_company_result_statement_2: true,
            filename: "pages/calculate/calculate-company-result-statement-2.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-company-result-statement-2.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction
        }),

        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Data Setting",
            calculate: true,
            calculate_data: true,
            calculate_data_setting: true,
            filename: "pages/calculate/calculate-data-setting.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-data-setting.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction
        }),

        new HtmlWebpackPlugin({
            title: "Spera Calculate | Calculate Data Setting History",
            calculate: true,
            calculate_data: true,
            calculate_data_history: true,
            filename: "pages/calculate/calculate-data-setting-history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/calculate/calculate-data-setting-history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction
        }),


        // User
        new HtmlWebpackPlugin({
            title: "Spera User | User Inquiry",
            user: true,
            userinquiry: true,
            filename: "pages/user/user-inquiry.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/user/user-inquiry.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // User
        new HtmlWebpackPlugin({
            title: "Spera User | User Lists",
            user: true,
            userinquiry: true,
            filename: "pages/user/user-lists.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/user/user-lists.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // User Account
        new HtmlWebpackPlugin({
            title: "Spera User | User Account",
            user: true,
            userinquiry: true,
            filename: "pages/user/user-account.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/user/user-account.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // User Casino
        new HtmlWebpackPlugin({
            title: "Spera User | User Casino",
            user: true,
            userinquiry: true,
            filename: "pages/user/user-casino.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/user/user-casino.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // User Detail
        new HtmlWebpackPlugin({
            title: "Spera User | User Details",
            user: true,
            userinquiry: true,
            filename: "pages/user/user-details.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/user/user-details.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // User Security
        new HtmlWebpackPlugin({
            title: "Spera User | User Security",
            user: true,
            userinquiry: true,
            filename: "pages/user/user-security.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/user/user-security.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        //** Portal Pages */

        /** Banner */

        // Main Banner
        new HtmlWebpackPlugin({
            title: "Spera Portal | Main Banner",
            portal: true,
            main_banner: true,
            portal_banner_page: true,
            filename: "pages/portal/portal-banner-main.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-banner-main.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Add Banner | Edit | Date Settings
        new HtmlWebpackPlugin({
            title: "Spera Portal | Add Banner",
            portal: true,
            main_banner: true,
            portal_banner_page: true,
            filename: "pages/portal/portal-banner-add.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-banner-add.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        /** End of Banner */

        /** Sub-Banner */

        new HtmlWebpackPlugin({
            title: "Spera Portal | Sub-Banner",
            portal: true,
            sub_banner: true,
            portal_banner_page: true,
            filename: "pages/portal/portal-sub-banner.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-sub-banner.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Sub-Banner Add
        new HtmlWebpackPlugin({
            title: "Spera Portal | Sub-Banner Add",
            portal: true,
            sub_banner: true,
            portal_banner_page: true,
            filename: "pages/portal/portal-sub-banner-add.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-sub-banner-add.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        /** End of Sub-Banner */

        /** Featured Banner */
        new HtmlWebpackPlugin({
            title: "Spera Portal | Featured Banner",
            portal: true,
            featured_banner: true,
            portal_banner_page: true,
            filename: "pages/portal/portal-banner-featured.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-banner-featured.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Banner Add
        new HtmlWebpackPlugin({
            title: "Spera Portal | Featured Banner Add",
            portal: true,
            featured_banner: true,
            portal_banner_page: true,
            filename: "pages/portal/portal-banner-featured-add.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-banner-featured-add.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        /** End of Featured Banner */

        /** Portal FAQ */

        // FAQ
        new HtmlWebpackPlugin({
            title: "Spera Portal | FAQ Lists",
            portal: true,
            portal_faq_lists: true,
            filename: "pages/portal/portal-faq-lists.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-faq-lists.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // FAQ Lists Add
        new HtmlWebpackPlugin({
            title: "Spera Portal | FAQ Lists Add",
            portal: true,
            portal_faq_lists: true,
            filename: "pages/portal/portal-faq-lists-add.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-faq-lists-add.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        /** End of Featured Banner */

        /** Notice */

        new HtmlWebpackPlugin({
            title: "Spera Portal | Notice Lists",
            portal: true,
            portal_notice_lists: true,
            filename: "pages/portal/portal-notice-lists.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-notice-lists.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Notice Lists Add
        new HtmlWebpackPlugin({
            title: "Spera Portal | Notice Lists Add",
            portal: true,
            portal_notice_lists: true,
            filename: "pages/portal/portal-notice-lists-add.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-notice-lists-add.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        /** End of Notice */

        /** Coupon Code */

        // Coupon Code Lists
        new HtmlWebpackPlugin({
            title: "Spera Portal | Coupon Lists",
            portal: true,
            portal_coupon_page: true,
            filename: "pages/portal/portal-coupon-lists.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-coupon-lists.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Portal | Coupon Code",
            portal: true,
            portal_coupon_page: true,
            filename: "pages/portal/portal-coupon-code.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-coupon-code.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Coupon Code Add
        new HtmlWebpackPlugin({
            title: "Spera Portal | Coupon Code Add",
            portal: true,
            portal_coupon_page: true,
            filename: "pages/portal/portal-coupon-code-add.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-coupon-code-add.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Coupon Code Single Add
        new HtmlWebpackPlugin({
            title: "Spera Portal | Coupon Code Add",
            portal: true,
            portal_coupon_page: true,
            filename: "pages/portal/portal-coupon-code-single-add.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-coupon-code-single-add.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Coupon Code History
        new HtmlWebpackPlugin({
            title: "Spera Portal | Coupon History",
            portal: true,
            portal_coupon_page: true,
            filename: "pages/portal/portal-coupon-history.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-coupon-history.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        /** End of Coupon Code */

        /** Lucky Day Pick */
        new HtmlWebpackPlugin({
            title: "Spera Portal | Lucky Day Pick",
            portal: true,
            portal_lucky_day_pick: true,
            filename: "pages/portal/portal-lucky-day-pick.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-lucky-day-pick.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Lucky Day Pick Add
        new HtmlWebpackPlugin({
            title: "Spera Portal | Lucky Day Pick Add",
            portal: true,
            portal_lucky_day_pick_add: true,
            filename: "pages/portal/portal-lucky-day-pick-add.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-lucky-day-pick-add.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        /** End of Portal Pages */

        /** Portal Message */

        // Message Notification
        new HtmlWebpackPlugin({
            title: "Spera Portal | Message Notification",
            portal: true,
            portal_message_notification: true,
            portal_message_page: true,
            filename: "pages/portal/portal-message-notification.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-message-notification.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Message Notification Send
        new HtmlWebpackPlugin({
            title: "Spera Portal | Message Notification Send",
            portal: true,
            portal_message_notification: true,
            portal_message_page: true,
            filename: "pages/portal/portal-message-notification-send.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-message-notification-send.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Message Notification
        new HtmlWebpackPlugin({
            title: "Spera Portal | Message Banner Notification",
            portal: true,
            portal_message_notification_banner: true,
            portal_message_page: true,
            filename: "pages/portal/portal-message-banner.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-message-banner.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Message Notification
        new HtmlWebpackPlugin({
            title: "Spera Portal | Message Banner Add Notification",
            portal: true,
            portal_message_notification_banner: true,
            portal_message_page: true,
            filename: "pages/portal/portal-message-banner-add.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-message-banner-add.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        /** End of Portal Message */

        /** Portal Maintenance Pages */
        new HtmlWebpackPlugin({
            title: "Spera Portal | Maintenance Service",
            portal: true,
            portal_maintenance_page: true,
            filename: "pages/portal/portal-maintenance-service.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-maintenance-service.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Portal | Maintenance Schedule",
            portal: true,
            portal_maintenance_page: true,
            filename: "pages/portal/portal-maintenance-schedule.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-maintenance-schedule.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        new HtmlWebpackPlugin({
            title: "Spera Portal | Maintenance On Going",
            portal: true,
            portal_maintenance_page: true,
            filename: "pages/portal/portal-maintenance-going.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/portal/portal-maintenance-going.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),
        /** End of Portal Maintenance Pages */

        /** Statistics Pages */

        // All Game
        new HtmlWebpackPlugin({
            title: "Spera Statistics | All Game",
            statistics: true,
            statistics_game_page: true,
            statistics_all_game: true,
            filename: "pages/statistics/statistics-all-game.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-all-game.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Current Money Supply
        new HtmlWebpackPlugin({
            title: "Spera Statistics | Current Money Supply",
            statistics: true,
            statistics_realtime: true,
            statistics_current_money_supply: true,
            filename: "pages/statistics/statistics-current-money-supply.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-current-money-supply.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Current Summary
        new HtmlWebpackPlugin({
            title: "Spera Statistics | Current Summary",
            statistics: true,
            statistics_current_summary: true,
            filename: "pages/statistics/statistics-current-summary.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-current-summary.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Current User Connection
        new HtmlWebpackPlugin({
            title: "Spera Statistics | Current User Connection",
            statistics: true,
            statistics_realtime: true,
            statistics_current_user_connection: true,
            filename:
                "pages/statistics/statistics-current-user-connection.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-current-user-connection.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // Retention Statistics
        new HtmlWebpackPlugin({
            title: "Spera Statistics | Retention Statistics",
            statistics: true,
            statistics_user_statistics: true,
            statistics_retention_statistics: true,
            filename: "pages/statistics/statistics-retention-statistics.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-retention-statistics.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // USDT Game
        new HtmlWebpackPlugin({
            title: "Spera Statistics | USDT Game",
            statistics: true,
            statistics_game_page: true,
            statistics_USDT_game_page: true,
            filename: "pages/statistics/statistics-USDT-game.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-USDT-game.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // USDT Money Supply
        new HtmlWebpackPlugin({
            title: "Spera Statistics | USDT Money Supply",
            statistics: true,
            statistics_USDT: true,
            statistics_USDT_money_supply: true,
            filename: "pages/statistics/statistics-USDT-money-supply.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-USDT-money-supply.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // USDT Payment
        new HtmlWebpackPlugin({
            title: "Spera Statistics | USDT Payment",
            statistics: true,
            statistics_USDT: true,
            statistics_USDT_payment: true,
            filename: "pages/statistics/statistics-USDT-payment.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-USDT-payment.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),


        // USDT Retire
        new HtmlWebpackPlugin({
            title: "Spera Statistics | USDT Retire",
            statistics: true,
            statistics_USDT: true,
            statistics_USDT_retire: true,
            filename: "pages/statistics/statistics-USDT-retire.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-USDT-retire.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // USDT Transaction
        new HtmlWebpackPlugin({
            title: "Spera Statistics | USDT Transaction",
            statistics: true,
            statistics_USDT: true,
            statistics_USDT_transaction: true,
            filename: "pages/statistics/statistics-USDT-transaction.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-USDT-transaction.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        // User Statistics
        new HtmlWebpackPlugin({
            title: "Spera Statistics | User Statistics",
            statistics: true,
            statistics_user_statistics: true,
            statistics_user_statistics_page: true,
            filename: "pages/statistics/statistics-user-statistics.html",
            template: Path.resolve(
                __dirname,
                "../src/views/pages/statistics/statistics-user-statistics.hbs"
            ),
            minify: false,
            relativePath: relativePath,
            isProduction: isProduction,
        }),

        /** End of Statistics Pages */
    ],
    resolve: {
        alias: {
            "~": Path.resolve(__dirname, "../src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto",
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[path][name].[ext]",
                        publicPath: relativePath,
                        context: "src",
                    },
                },
            },
            {
                test: /\.hbs$/,
                loader: "handlebars-loader",
            },
        ],
    },
};
